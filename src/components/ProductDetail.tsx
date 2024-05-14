import { useState } from "react";
import Button from "./ui/Button";
import ProductImageSlide from "./ProductImageSlide";
import { AccordionGroup, Accordion } from "./Accordion";
import { addItem } from "../state/cart/cartSlice";
import { useDispatch } from "react-redux";

interface ProductProp {
    product_name: string;
    product_description: string;
    product_image: string;
    product_price: string;
}

interface ProductDetailState {
    id: string | undefined;
    product: ProductProp | undefined;
}

const ProductDetail = ({ id, product }: ProductDetailState) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        return setQuantity(quantity + 1);
    };
    const handleDecrement = () => {
        if (quantity <= 1) {
            return;
        }
        return setQuantity(quantity - 1);
    };

    // dispatch product to cart
    const dispatch = useDispatch();

    const handleAddToCart = (product_id: number, product_name: string, quantity: number) => {
        dispatch(addItem({ id: product_id, name: product_name, quantity }));
    };

    if (!product || !id) {
        // Handle case when product is undefined
        return <div>Loading...</div>;
    }

    const product_id = parseInt(id)
    const { product_name, product_description, product_image, product_price } = product;

    return (
        <main className="container mx-auto md:mt-10">
            <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-start-1 md:col-end-9">
                    <ProductImageSlide images={product_image} />

                    <div className="hidden md:block">
                        <AccordionGroup>
                            <Accordion title="SIZE GUIDE">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                                cupiditate iure repudiandae officia, illum quos consectetur
                                necessitatibus officiis ipsum sunt?
                            </Accordion>
                            <Accordion title="DELIVERY & RETURNS">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                                cupiditate iure repudiandae officia, illum quos consectetur
                                necessitatibus officiis ipsum sunt?
                            </Accordion>
                            <Accordion title="LIFETIME WARANTY">
                                This item is guaranteed for a LIFETIME - If you experience any
                                defects in our craftsmanship or breakage, Adamans will repair or
                                replace the item under it's lifetime warranty. You may activate this
                                by using your lifetime warranty and authenticity card.
                            </Accordion>
                            <Accordion title="INCLUDED IN YOUR ORDER">
                                <ul>
                                    <li className="leading-10">- Adamans Felt Lined Box</li>
                                    <li className="leading-10">- Lifetime Warranty Card</li>
                                    <li className="leading-10">
                                        - Adamans Leather Felt Lined Pouch
                                    </li>
                                </ul>
                            </Accordion>
                        </AccordionGroup>
                    </div>
                </div>
                <div className="px-2 md:px-0 md:col-start-9 md:col-end-13">
                    <h1 className="text-center md:text-left text-xl md:text-4xl">
                        {product_name}
                    </h1>
                    <p className="text-center md:text-left text-base md:text-2xl my-3">
                        {product_price}
                    </p>

                    <hr className="my-4" />

                    <div className="mt-4">
                        <label htmlFor="quantity" className="block mb-2">
                            Quantity
                        </label>
                        <div className="border rounded w-fit">
                            <button onClick={handleDecrement} className="py-2 px-4 text-lg">
                                -
                            </button>
                            <input
                                type="number"
                                id="quantity"
                                name="quantity"
                                min="1"
                                value={quantity}
                                className="py-2 w-20 text-center outline-none"
                            />
                            <button onClick={handleIncrement} className="py-2 px-4 text-lg">
                                +
                            </button>
                        </div>
                    </div>
                    <Button
                        onClick={() => handleAddToCart(product_id, product_name, quantity)}
                        variant="secondary"
                        className="block w-full my-3">
                        Add to Cart
                    </Button>
                    <Button className="block w-full my-3">Buy</Button>
                    <p className="mt-4">{product_description}</p>
                    <a
                        href="#"
                        className="block mt-2 text-grey-100 hover:text-grey-400 hover:underline">
                        View details
                    </a>
                </div>
            </section>

            {/* mobile display for accordion */}
            <div className=" md:hidden">
                <AccordionGroup>
                    <Accordion title="SIZE GUIDE">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate
                        iure repudiandae officia, illum quos consectetur necessitatibus officiis
                        ipsum sunt?
                    </Accordion>
                    <Accordion title="DELIVERY & RETURNS">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate
                        iure repudiandae officia, illum quos consectetur necessitatibus officiis
                        ipsum sunt?
                    </Accordion>
                    <Accordion title="LIFETIME WARANTY">
                        This item is guaranteed for a LIFETIME - If you experience any defects in
                        our craftsmanship or breakage, Adamans will repair or replace the item under
                        it's lifetime warranty. You may activate this by using your lifetime
                        warranty and authenticity card.
                    </Accordion>
                    <Accordion title="INCLUDED IN YOUR ORDER">
                        <ul>
                            <li className="leading-10">- Adamans Felt Lined Box</li>
                            <li className="leading-10">- Lifetime Warranty Card</li>
                            <li className="leading-10">- Adamans Leather Felt Lined Pouch</li>
                        </ul>
                    </Accordion>
                </AccordionGroup>
            </div>
        </main>
    );
};
export default ProductDetail;
