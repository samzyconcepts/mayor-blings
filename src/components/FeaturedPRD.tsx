import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Product from "./ui/Product";

interface productState {
    id: number;
    name: string;
    description: string;
    image: string[];
    quantity: number;
    price: number;
    category: string;
}
const FeaturedPRD = () => {
    const products = useSelector((state: RootState) => state.products.products);

    return (
        <section className="container mx-auto py-4 md:py-10">
            <h1 className="uppercase tracking-widest font-medium text-lg md:text-2xl text-center">
                featured products
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-1 sm:gap-2 md:gap-4  mt-4 md:mt-12 sm:px-4">
                {products &&
                    products.map(({ id, name, image, price }: productState) => (
                        <Product key={id} id={id} imgUrl={image[0]} name={name} price={price} />
                    ))}
            </div>
        </section>
    );
};
export default FeaturedPRD;
