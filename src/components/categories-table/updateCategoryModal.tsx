import { RootState } from "@/state/store";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../ui/Button";
import useApiClient from "@/util/api";

interface CategoryProp {
    id: number;
    category_name: string;
    category_description: string;
    category_image: string;
}

type updateCategoryModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    categoryId: number | null;
    onUpdate: (status: boolean) => void;
};

const UpdateCategoryModal = ({
    isOpen,
    onRequestClose,
    categoryId,
    onUpdate,
}: updateCategoryModalProps) => {
    const [category, setCategory] = useState<CategoryProp | null>(null);
    const [loading, setLoading] = useState(false);
    const apiClient = useApiClient();

    const categories = useSelector((state: RootState) => state.categories.categories);

    useEffect(() => {
        if (categoryId && categories.length > 0) {
            setLoading(true);
            const category = categories.find((category) => category["id"] === categoryId);

            if (category) {
                setCategory(category);
                setLoading(false);
            }
        }
    }, [categoryId, categories]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (category) {
            const { name, value } = e.target;

            setCategory({
                ...category,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (category && categoryId) {
            apiClient
                .patch(`admin/category/update?category_id=${categoryId}`, category)
                .then((response) => {
                    const isSuccess = response.status === 200;
                    onUpdate(isSuccess);

                    if (isSuccess) onRequestClose();
                })
                .catch(() => {
                    onUpdate(false);
                });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 rounded shadow-lg z-50 max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Update Category</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    category && (
                        <form onSubmit={handleSubmit}>
                            <label className="block mb-2">
                                Name:
                                <input
                                    type="text"
                                    name="category_name"
                                    value={category.category_name}
                                    onChange={handleChange}
                                    className="border p-2 w-full"
                                />
                            </label>

                            <label className="block mb-2">
                                Description:
                                <textarea
                                    name="category_description"
                                    value={category.category_description}
                                    onChange={handleChange}
                                    className="border p-2 w-full"
                                />
                            </label>

                            <div className="flex justify-end space-x-2">
                                <Button variant="secondary" type="button" onClick={onRequestClose}>
                                    Cancel
                                </Button>
                                <Button type="submit">Update</Button>
                            </div>
                        </form>
                    )
                )}
            </div>
        </div>
    );
};
export default UpdateCategoryModal;
