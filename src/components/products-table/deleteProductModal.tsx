import axios from "axios";
import Button from "../ui/Button";
import { deleteProductURL } from "@/util/api";

interface deleteProductModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    productId: number | null;
}

const DeleteProductModal = ({ isOpen, onRequestClose, productId }: deleteProductModalProps) => {
    const handleDelete = (productId: number | null) => {
        if(productId){
            axios.delete(deleteProductURL(productId))
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-6 rounded shadow-lg z-50 max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Delete Product</h2>
                <p>Do you want to delete this product?</p>
                <div className="mt-2 flex justify-end space-x-2">
                    <Button variant="secondary" type="button" onClick={onRequestClose}>
                        No
                    </Button>
                    <Button type="button" onClick={() => handleDelete(productId)}>
                        Confirm
                    </Button>
                </div>
            </div>
        </div>
    );
};
export default DeleteProductModal;
