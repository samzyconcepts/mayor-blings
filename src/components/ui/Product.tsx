import Button from "./Button";

interface ProductProp {
    imgUrl: string;
    name: string;
    price: number;
}

const Product = ({ imgUrl, name, price }: ProductProp) => {
    return (
        <div className="p-4 rounded-md bg-grey-50 w-fit">
            <div className="w-36 h-40 md:w-40 lg:w-72  lg:h-80 overflow-hidden rounded">
                <img src={imgUrl} alt={imgUrl} className="object-cover w-full h-full" />
            </div>
            <h1 className=" capitalize py-4">{name}</h1>
            <div className="flex gap-2 items-center">
                <p>$ {price}</p>
                <Button>Add to Cart</Button>
            </div>
        </div>
    );
};
export default Product;
