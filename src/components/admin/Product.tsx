import { useState } from "react";
import { Link } from "react-router-dom";
import ProductTable from "../products-table/page";
import Button from "../ui/Button";
import UpdateProductModal from "../products-table/UpdateProductModal";
import DeleteProductModal from "../products-table/deleteProductModal";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

const Product = () => {
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const { toast } = useToast();

    const handleUpdateClick = (productId: number) => {
        setSelectedProductId(productId);
        setIsUpdateModalOpen(true);
    };

    const handleUpdateModalClose = () => {
        setIsUpdateModalOpen(false);
        setSelectedProductId(null);
    };

    const handleDeleteClick = (productId: number) => {
        setSelectedProductId(productId);
        setIsDeleteModalOpen(true);
    };

    const handleDeleteModalClose = () => {
        setIsDeleteModalOpen(false);
        setSelectedProductId(null);
    };

    const handleProductUpdate = (status: boolean) => {
        if (status) {
            toast({
                title: "Success!",
                description: "You have successfully updated the product",
            });
        } else {
            toast({
                variant: "destructive",
                title: "Failed!",
                description: "You have failed to updated the product",
            });
        }
    };

    return (
        <section className="p-10 col-start-2 col-end-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl">Products</h1>
                <Link to="create">
                    <Button variant="secondary">Create Product</Button>
                </Link>
            </div>

            <div className="mt-5">
                <ProductTable onUpdateClick={handleUpdateClick} onDeleteClick={handleDeleteClick} />
            </div>

            <UpdateProductModal
                isOpen={isUpdateModalOpen}
                onRequestClose={handleUpdateModalClose}
                productId={selectedProductId}
                onUpdate={handleProductUpdate}
            />

            <DeleteProductModal
                isOpen={isDeleteModalOpen}
                onRequestClose={handleDeleteModalClose}
                productId={selectedProductId}
            />

            <Toaster/>
        </section>
    );
};

export default Product;
