import { useState } from "react";
import CategoryTable from "../categories-table/page";
import Button from "../ui/Button";
import UpdateCategoryModal from "../categories-table/updateCategoryModal";
import DeleteCategoryModal from "../categories-table/deleteCategoryModal";

interface CategoryProp {
    id: number;
    category_name: string;
    category_description: string;
    category_image: string;
}

const Category = () => {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [selectedCategoryName, setSelectedCategoryName] = useState<string | null>(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleUpdateClick = (categoryId: number) => {
        setSelectedCategoryId(categoryId);
        setIsUpdateModalOpen(true);
    };
    const handleUpdateModalClose = () => {
        setIsUpdateModalOpen(false);
        setSelectedCategoryId(null);
    };

    const handleDeleteClick = (categoryId: number, categoryName: string) => {
        setSelectedCategoryId(categoryId);
        setSelectedCategoryName(categoryName);
        setIsDeleteModalOpen(true);
    };
    const handleDeleteModalClose = () => {
        setSelectedCategoryId(null);
        setSelectedCategoryName(null);
        setIsDeleteModalOpen(false);
    };

    const handleUpdate = (result: CategoryProp) => {
        console.log(result);
    };

    return (
        <section className="p-10 col-start-2 col-end-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Category</h1>
                <Button variant="secondary">Create Category</Button>
            </div>

            
            <div className="mt-5">
                <CategoryTable
                    onUpdateClick={handleUpdateClick}
                    onDeleteClick={handleDeleteClick}
                />
            </div>

            <UpdateCategoryModal
                isOpen={isUpdateModalOpen}
                onRequestClose={handleUpdateModalClose}
                categoryId={selectedCategoryId}
                onUpdate={handleUpdate}
            />

            <DeleteCategoryModal
                isOpen={isDeleteModalOpen}
                onRequestClose={handleDeleteModalClose}
                categoryId={selectedCategoryId}
                categoryName={selectedCategoryName}
            />
        </section>
    );
};
export default Category;
