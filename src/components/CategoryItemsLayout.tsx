import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import Product from "./ui/Product";

const CategoryItemsLayout = () => {
    const { categoryId } = useParams();

    const products = useSelector((state: RootState) => state.products.products);

    if (!categoryId) return <div>loading...</div>;

    const filteredProducts = products.filter((product) => product["category"] === categoryId);

    return (
        <section className="md:col-start-2 md:col-end-6 grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 md:mt-0 px-4">
            {filteredProducts.map(({ id, name, image, price }) => (
                <Product
                    key={id}
                    id={id}
                    imgUrl={image[0]}
                    name={name}
                    price={price}
                />
            ))}
        </section>
    );
};
export default CategoryItemsLayout;
