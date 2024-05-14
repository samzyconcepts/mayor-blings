import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Product from "./ui/Product";

interface productState {
    id: number;
    product_name: string;
    product_description?: string;
    product_image: string;
    product_quantity?: number;
    product_price: number;
}
const FeaturedPRD = () => {
    const products = useSelector((state: RootState) => state.products.products);

    return (
        <section className="container mx-auto py-10">
            <h1 className="uppercase tracking-widest font-medium text-lg md:text-2xl text-center">
                featured products
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4  mt-6 md:mt-12 px-4">
                {products &&
                    products.map(
                        ({ id, product_name, product_image, product_price }: productState) => (
                            <Product
                                key={id}
                                id={id}
                                imgUrl={product_image}
                                name={product_name}
                                price={product_price}
                            />
                        )
                    )}
            </div>
        </section>
    );
};
export default FeaturedPRD;
