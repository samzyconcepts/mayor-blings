import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import Input from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/Button";
import axios from "axios";
import useApiClient from "@/util/api";

const categoryValueSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Category name cannot be empty" })
        .max(50, { message: "Name cannot be more than 50 character" }),
    description: z.string().min(1, { message: "Description cannot be empty" }),
    image: z.array(z.any()).min(1, { message: "Upload an image that represent the category" }),
});

type categoryValue = z.infer<typeof categoryValueSchema>;

const CreateCategory = () => {
    const [imagePreview, setImagePreview] = useState<string[]>([]);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<categoryValue>({
        resolver: zodResolver(categoryValueSchema),
    });

    const apiClient = useApiClient();

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = Array.from(e.target.files as FileList);
        setValue("image", file);

        // Create image previews
        const imagePreview = file.map((file) => URL.createObjectURL(file));
        setImagePreview(imagePreview);
    };

    const onSubmit: SubmitHandler<categoryValue> = async (data) => {
        try {
            // upload image for a category to Cloudinary
            const formData = new FormData();

            formData.append("file", data.image[0]);
            formData.append("upload_preset", "mayorblings");
            formData.append("folder", "mayorblings");

            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${
                    import.meta.env.VITE_APP_CLOUD_NAME
                }/image/upload`,
                formData
            );

            const imgUrl = response.data.secure_url;

            const createData = {
                category_name: data.name,
                category_description: data.description,
                category_image: imgUrl,
            };

            // post category to the back end
            await apiClient.post("/admin/category/create", createData);

            reset();
            setImagePreview([]);
        } catch (error) {
            console.log("Error creating category: ", error);
        }
    };

    return (
        <section className="p-10 col-start-2 col-end-6">
            <h1 className="text-2xl">Create Category</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto py-8">
                <label htmlFor="name" className="block my-4">
                    Name
                    <Input
                        {...register("name")}
                        inputType="text"
                        id="name"
                        variant="secondary"
                        placeholder="Type the category name here."
                        className="block w-full mt-2"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs mt-2">{errors.name.message}</p>
                    )}
                </label>

                <label htmlFor="description" className="block my-4">
                    Description
                    <Textarea
                        {...register("description")}
                        placeholder="Type your description here."
                        id="description"
                        className="resize-none mt-2"
                    />
                    {errors.description && (
                        <p className="text-red-500 text-xs mt-2">{errors.description.message}</p>
                    )}
                </label>

                <label htmlFor="image" className="block my-4">
                    Images
                    <input
                        id="image"
                        type="file"
                        onChange={handleImageChange}
                        className="block w-full mt-2"
                    />
                    {errors.image && (
                        <p className="text-red-500 text-xs mt-2">{errors.image.message}</p>
                    )}
                </label>

                <div className="flex flex-wrap gap-3">
                    {imagePreview.map((preview: string, index) => (
                        <div key={index} className="relative inline-block">
                            <img
                                src={preview}
                                alt={`Preview ${index}`}
                                className="w-28 h-32 object-cover border-2 border-grey-300 rounded-lg"
                            />
                        </div>
                    ))}
                </div>

                <Button type="submit" disabled={isSubmitting} className="block mt-2 w-full">
                    Create
                </Button>
            </form>
        </section>
    );
};
export default CreateCategory;
