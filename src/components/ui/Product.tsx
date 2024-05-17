import { Link } from "react-router-dom";
import { addItem } from "../../state/cart/cartSlice";
import { useDispatch } from "react-redux";
// Component
import Button from "./Button";

interface ProductProp {
    id: number;
    imgUrl: string;
    name: string;
    price: number;
}

const Product = ({ id, imgUrl, name, price }: ProductProp) => {
    const dispatch = useDispatch();

    const handleAddToCart = (product_id: number, product_name: string) => {
        dispatch(addItem({ id: product_id, name: product_name, quantity: 1 }));
    };

    return (
        <div className="p-2 md:p-4 rounded-md bg-grey-50 w-full">
            <Link to={`/products/${id}`}>
                <div className="w-full h-48  lg:h-72 overflow-hidden rounded">
                    <img src={imgUrl} alt={imgUrl} className="object-cover w-full h-full" />
                </div>
                <h1 className="capitalize text-xs md:text-base py-2 md:py-4">{name}</h1>
            </Link>
            <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <p className="text-sm md:text-base">$ {price}</p>
                <Button onClick={() => handleAddToCart(id, name)}>Add to Cart</Button>
            </div>
        </div>
    );
};
export default Product;
