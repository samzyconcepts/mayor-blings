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
        <div className="p-4 rounded-md bg-grey-50 w-full">
            <Link
                to={`/products/${id}`}
                className="block w-full h-48  lg:h-80 overflow-hidden rounded">
                <img src={imgUrl} alt={imgUrl} className="object-cover w-full h-full" />
            </Link>
            <h1 className="capitalize py-4">{name}</h1>
            <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <p>$ {price}</p>
                <Button onClick={() => handleAddToCart(id, name)}>Add to Cart</Button>
            </div>
        </div>
    );
};
export default Product;
