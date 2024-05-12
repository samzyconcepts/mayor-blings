import Button from "./Button";

interface ProductProp {
    imgUrl: string;
    name: string;
    price: number;
}

const Product = ({ imgUrl, name, price }: ProductProp) => {
    return (
        <div className="p-4 rounded-md bg-grey-50 w-full">
            <div className="w-full h-48  lg:h-80 overflow-hidden rounded">
                <img src={imgUrl} alt={imgUrl} className="object-cover w-full h-full" />
            </div>
            <h1 className="capitalize py-4">{name}</h1>
            <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <p>$ {price}</p>
                <Button>Add to Cart</Button>
            </div>
        </div>
    );
};
export default Product;
