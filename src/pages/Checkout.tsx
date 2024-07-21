import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { removeItem, clearCart, updateItemQuantity } from "../state/cart/cartSlice";

// component
import Navbar from "../components/Navbar";
import Button from "../components/ui/Button";

interface ProductProp {
    id: number;
    name: string;
    image: string[];
    price: number;
}

const Checkout = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const products = useSelector((state: RootState) => state.products.products);

    const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

    useEffect(() => {
        const initialQuantities = cartItems.reduce((acc, item) => {
            acc[item.id] = item.quantity;
            return acc;
        }, {} as { [key: number]: number });

        setQuantities(initialQuantities);
    }, [cartItems]);

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const product = products.find((product) => product.id === item.id);
            return product ? total + product.price * quantities[item.id] : total;
        }, 0);
    };

    const handleCheckout = () => {
        let message = "Order summaries:\n";

        cartItems.forEach((item, index) => {
            const product = products.find((product) => product.id === item.id);

            if (product) {
                message += `\n${index + 1}. ${product.name} x ${item.quantity} @ ₦${
                    product.price
                } = ₦${product.price * item.quantity}\n`;
            }
        });

        // open whatsapp
        window.open(`https://wa.me/19052439244/?text=${encodeURIComponent(message)}`, "_blank");

        dispatch(clearCart());
    };

    const handleIncrement = (id: number) => {
        const newQuantity = quantities[id] + 1;
        setQuantities({ ...quantities, [id]: newQuantity });
        dispatch(updateItemQuantity({ id, quantity: newQuantity }));
    };

    const handleDecrement = (id: number) => {
        if (quantities[id] > 1) {
            const newQuantity = quantities[id] - 1;
            setQuantities({ ...quantities, [id]: newQuantity });
            dispatch(updateItemQuantity({ id, quantity: newQuantity }));
        }
    };

    const handleChange = (id: number, value: number) => {
        if (value >= 1) {
            setQuantities({ ...quantities, [id]: value });
            dispatch(updateItemQuantity({ id, quantity: value }));
        }
    };

    return (
        <>
            <Navbar />
            <section
                className={`container mx-auto py-10 ${
                    cartItems.length === 0 && "flex justify-center items-center"
                }`}>
                <div className="grid md:grid-cols-3 gap-4 items-start">
                    <div className="md:col-span-2">
                        {cartItems.length ? (
                            cartItems.map((item, index) => {
                                // Find the product in the products store based on item ID
                                const product = products.find(
                                    (product: ProductProp) => product.id == item.id
                                );

                                if (!product) return <div key={index}>Loading...</div>;

                                const { name, image, price } = product;
                                const quantity = quantities[item.id];

                                return (
                                    <div
                                        key={index}
                                        className="border p-4 mb-3 rounded-lg flex gap-4 items-center">
                                        {product && (
                                            <>
                                                <img
                                                    src={image[0]}
                                                    alt={name}
                                                    className="w-24 md:w-40"
                                                />

                                                <div>
                                                    <h1 className="font-semibold  md:text-2xl">
                                                        {name}
                                                    </h1>
                                                    <p className="text-sm md:text-base">
                                                        Quantity: {quantity}
                                                    </p>
                                                    <div className="border rounded w-fit">
                                                        <button
                                                            onClick={() => {
                                                                handleDecrement(item.id);
                                                            }}
                                                            className="py-2 px-4 text-lg">
                                                            -
                                                        </button>
                                                        <input
                                                            type="number"
                                                            id="quantity"
                                                            name="quantity"
                                                            min="1"
                                                            value={quantity}
                                                            onChange={(e) =>
                                                                handleChange(
                                                                    item.id,
                                                                    parseInt(e.target.value)
                                                                )
                                                            }
                                                            className="py-2 w-20 text-center outline-none"
                                                        />
                                                        <button
                                                            onClick={() => {
                                                                handleIncrement(item.id);
                                                            }}
                                                            className="py-2 px-4 text-lg">
                                                            +
                                                        </button>
                                                    </div>
                                                    <h1 className="font-medium leading-relaxed md:text-xl">
                                                        ${(price * quantity).toFixed(2)}
                                                    </h1>

                                                    <span
                                                        onClick={() =>
                                                            dispatch(removeItem(item.id))
                                                        }
                                                        className="block underline mt-3 text-red-500 hover:text-red-400 text-sm md:text-base cursor-pointer">
                                                        REMOVE
                                                    </span>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })
                        ) : (
                            <h1 className="font-bold text-xl md:text-4xl">Your Cart is Empty</h1>
                        )}
                    </div>
                    {cartItems.length ? (
                        <div className="border p-4 mb-3 rounded-lg flex flex-col gap-8 ">
                            <span>Total:</span>
                            <h1 className="font-bold text-2xl md:text-6xl">{calculateTotal()}</h1>
                            <Button onClick={handleCheckout} className="w-full">
                                Checkout
                            </Button>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </section>
        </>
    );
};
export default Checkout;
