import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";
import apiClient from "@/util/api";
import Button from "../ui/Button";

type ProductProp = {
    id: number;
    product_name: string;
    product_description: string;
    product_image: string;
    product_quantity: number;
    product_price: number;
    category: number;
};

type UpdateProductModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    productId: number | null;
    onUpdate: (status: boolean) => void;
};

const UpdateProductModal = ({
    isOpen,
    onRequestClose,
    productId,
    onUpdate,
}: UpdateProductModalProps) => {
    const [product, setProduct] = useState<ProductProp | null>(null);
    const [loading, setLoading] = useState(false);

    const products = useSelector((state: RootState) => state.products.products);

    useEffect(() => {
        if (productId) {
            setLoading(true);
            const filteredProduct = products.find((product) => product["id"] === productId);
            if (filteredProduct) {
                setProduct(filteredProduct);
                setLoading(false);
            }
        }
    }, [productId, products]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (product) {
            setProduct({
                ...product,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (product && productId) {
            apiClient
                .post("/admin/product/update", product)
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
                <h2 className="text-xl font-bold mb-4">Update Product</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    product && (
                        <form onSubmit={handleSubmit}>
                            <label className="block mb-2">
                                Name:
                                <input
                                    type="text"
                                    name="product_name"
                                    value={product.product_name}
                                    onChange={handleChange}
                                    className="border p-2 w-full"
                                />
                            </label>
                            <label className="block mb-2">
                                Description:
                                <input
                                    type="text"
                                    name="product_description"
                                    value={product.product_description}
                                    onChange={handleChange}
                                    className="border p-2 w-full"
                                />
                            </label>
                            <label className="block mb-2">
                                Quantity:
                                <input
                                    type="number"
                                    name="product_quantity"
                                    value={product.product_quantity}
                                    onChange={handleChange}
                                    className="border p-2 w-full"
                                />
                            </label>
                            <label className="block mb-2">
                                Price:
                                <input
                                    type="number"
                                    name="product_price"
                                    value={product.product_price}
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

export default UpdateProductModal;
