import axios from "axios";
import useApiClient from "@/util/api";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

import Input from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import Button from "@/components/ui/Button";

const productSchema = z.object({
    name: z
        .string()
        .min(5, { message: "Category name cannot be empty" })
        .max(200, { message: "Name cannot be more than 200 character" }),
    description: z.string().min(1, { message: "Description cannot be empty" }),
    images: z.array(z.any()).min(1, { message: "At least one image is required" }),
    quantity: z.string().min(1, { message: "Quantity can not be less than one" }),
    price: z.string().min(1, { message: "Please enter a price" }),
    category: z.string(),
});

type productValue = {
    name: string;
    description: string;
    images: File[];
    quantity: string;
    price: string;
    category: string;
};

const CreateProduct = () => {
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [images, setImages] = useState<File[]>([]);

    const apiClient = useApiClient();
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<productValue>({ resolver: zodResolver(productSchema) });

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newFiles = Array.from(e.target.files as FileList);
        const updatedFiles = [...images, ...newFiles];
        setValue("images", updatedFiles);
        setImages(updatedFiles);

        // Create image previews
        const imagePreviews = newFiles.map((file) => URL.createObjectURL(file));
        setImagePreviews((prevPreviews) => [...prevPreviews, ...imagePreviews]);
    };

    const removeImage = (index: number) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
        setValue("images", newImages);
        setImagePreviews((prevPreviews) => prevPreviews.filter((_, i) => i !== index));
    };

    const onSubmit: SubmitHandler<productValue> = async (data) => {
        // upload images to Cloudinary
        const uploadPromises = data.images.map((image) => {
            const formData = new FormData();

            formData.append("file", image);
            formData.append("upload_preset", "mayorblings");
            formData.append("folder", "mayorblings");
            return axios.post(
                `https://api.cloudinary.com/v1_1/${
                    import.meta.env.VITE_APP_CLOUD_NAME
                }/image/upload`,
                formData
            );
        });

        try {
            const responses = await Promise.all(uploadPromises);
            const imgUrls = responses.map((response) => response.data.secure_url);

            // formData for the database
            const formData = {
                category: data.category.toLowerCase(),
                product_name: data.name,
                product_description: data.description,
                product_quantity: parseInt(data.quantity),
                product_price: data.price,
                images: imgUrls,
            };

            await apiClient.post("/admin/product/create", formData, {
                headers: { "Content-Type": "application/json" },
            });

            reset();
            setImagePreviews([]);
            setImages([]);
            navigate('/admin/products')
        } catch (error) {
            console.log("Error creating product: ", error);
        }
    };
    return (
        <section className="p-10 col-start-2 col-end-6">
            <h1 className="text-2xl">Create Product</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto py-8">
                <label htmlFor="name" className="block my-4">
                    Name
                    <Input
                        {...register("name")}
                        inputType="text"
                        id="name"
                        variant="secondary"
                        placeholder="Type the product name here."
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

                <label htmlFor="quantity" className="block my-4">
                    Quantity
                    <Input
                        {...register("quantity")}
                        inputType="number"
                        id="quantity"
                        variant="secondary"
                        placeholder="20"
                        className="block w-full mt-2"
                    />
                    {errors.quantity && (
                        <p className="text-red-500 text-xs mt-2">{errors.quantity.message}</p>
                    )}
                </label>

                <label htmlFor="price" className="block my-4">
                    Price
                    <Input
                        {...register("price")}
                        inputType="number"
                        id="price"
                        variant="secondary"
                        placeholder="150"
                        className="block w-full mt-2"
                    />
                    {errors.price && (
                        <p className="text-red-500 text-xs mt-2">{errors.price.message}</p>
                    )}
                </label>

                <label htmlFor="category" className="block my-4">
                    Category
                    <Input
                        {...register("category")}
                        inputType="text"
                        id="name"
                        variant="secondary"
                        placeholder="Type the category name here."
                        className="block w-full mt-2"
                    />
                    {errors.category && (
                        <p className="text-red-500 text-xs mt-2">{errors.category.message}</p>
                    )}
                </label>

                <label htmlFor="image" className="block my-4">
                    Images
                    <input
                        id="image"
                        type="file"
                        multiple
                        onChange={handleImageChange}
                        className="block w-full mt-2"
                    />
                    {errors.images && (
                        <p className="text-red-500 text-xs mt-2">{errors.images.message}</p>
                    )}
                </label>

                <div className="flex flex-wrap gap-3">
                    {imagePreviews.map((preview: string, index) => (
                        <div key={index} className="relative inline-block">
                            <img
                                src={preview}
                                alt={`Preview ${index}`}
                                className="w-28 h-32 object-cover border-2 border-grey-300 rounded-lg"
                            />

                            <Button
                                type="button"
                                variant="secondary"
                                className="absolute top-1 right-1 cursor-pointer border-none"
                                onClick={() => removeImage(index)}>
                                X
                            </Button>
                        </div>
                    ))}
                </div>

                <Button
                    type="submit"
                    disabled={isSubmitting}
                    className=" relative block mt-2 w-full">
                    {isSubmitting ? (
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 animate-spin text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24">
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 0116 0H4z"
                                />
                            </svg>
                            Creating...
                        </div>
                    ) : (
                        "Create"
                    )}
                </Button>
            </form>
        </section>
    );
};
export default CreateProduct;
