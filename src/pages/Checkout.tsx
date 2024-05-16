import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../state/store";
import { removeItem, clearCart } from "../state/cart/cartSlice";

// component
import Navbar from "../components/Navbar";
import Button from "../components/ui/Button";

interface ProductProp {
    id: number;
    product_name: string;
    product_image: string;
    product_price: number;
}

const Checkout = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const products = useSelector((state: RootState) => state.products.products);

    const calculateTotal = () => {
        let totalPrice = 0;

        cartItems.forEach((item) => {
            const product = products.find((product) => product.id === item.id);
            if (product) return (totalPrice += product.product_price * item.quantity);
        });

        return totalPrice;
    };

    const handleCheckout = () => {
        let message = "Order summaries:\n";

        cartItems.forEach((item, index) => {
            const product = products.find((product) => product.id === item.id);

            if (product) {
                message += `${index + 1}. ${product.product_name} x ${item.quantity} @ $${
                    product.product_price
                } = $${product.product_price * item.quantity}`;
            }
        });

        // open whatsapp
        window.open(`https://wa.me/07038899653/?text=${encodeURIComponent(message)}`, "_blank");

        dispatch(clearCart());
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

                                if (!product) return <div>Loading...</div>;

                                const { product_name, product_image, product_price } = product;

                                return (
                                    <div
                                        key={index}
                                        className="border p-4 mb-3 rounded-lg flex gap-4 items-center">
                                        {product && (
                                            <>
                                                <img
                                                    src={product_image}
                                                    alt={product_name}
                                                    className="w-24 md:w-40"
                                                />

                                                <div>
                                                    <h1 className="font-semibold  md:text-2xl">
                                                        {product_name}
                                                    </h1>
                                                    <p className="text-sm md:text-base">Quantity: {item.quantity}</p>
                                                    <h1 className="font-medium leading-relaxed md:text-xl">
                                                        $
                                                        {(product_price * item.quantity).toFixed(2)}
                                                    </h1>
                                                    <span onClick={() => dispatch(removeItem(item.id))} className="block underline mt-3 text-red-500 hover:text-red-400 text-sm md:text-base cursor-pointer">
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
