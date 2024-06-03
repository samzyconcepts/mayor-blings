import apiClient from "@/util/api";
import Button from "../ui/Button";
import { toast } from "../ui/use-toast";

type deleteCategoryModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    categoryId: number | null;
    categoryName: string | null;
};

const DeleteCategoryModal = ({
    isOpen,
    onRequestClose,
    categoryId,
    categoryName,
}: deleteCategoryModalProps) => {
    const handleDelete = (category_id: number | null) => {
        //delete category
        if (category_id) {
            apiClient
                .delete(`/admin/category/delete?category_id=${category_id}`)
                .then((response) => {
                    if (response.status === 204) {
                        toast({
                            description: "Category deleted successfully",
                        });
                    }
                })
                .catch(() => {
                    toast({
                        variant: "destructive",
                        description: "Delete unsuccessful",
                    });
                });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 rounded shadow-lg z-50 max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Delete Category</h2>
                <p>
                    Do you want to delete <span className="font-bold">{categoryName}</span>?
                </p>
                <div className="mt-2 flex justify-end space-x-2">
                    <Button variant="secondary" type="button" onClick={onRequestClose}>
                        No
                    </Button>
                    <Button type="button" onClick={() => handleDelete(categoryId)}>
                        Confirm
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default DeleteCategoryModal;
