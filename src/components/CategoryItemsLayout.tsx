import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Product from "./ui/Product";

const CategoryItemsLayout = () => {
    const { categoryId } = useParams();

    const products = useSelector((state: RootState) => state.products.products);

    if (!categoryId) return <div>loading...</div>;
    
    const filteredProducts = products.filter(
        (product) => product["category"] === parseInt(categoryId)
    );

    return (
        <section className="md:col-start-2 md:col-end-6 grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 md:mt-0 px-4">
            {filteredProducts.map(({ id, product_name, product_image, product_price }) => (
                <Product
                    key={id}
                    id={id}
                    imgUrl={product_image}
                    name={product_name}
                    price={product_price}
                />
            ))}
        </section>
    );
};
export default CategoryItemsLayout;
