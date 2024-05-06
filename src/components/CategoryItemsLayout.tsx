import Product from "./ui/Product";

const CategoryItemsLayout = () => {
    const price = 100;
    return (
        <section className="md:col-start-2 md:col-end-6 grid grid-cols-2 sm:grid-cols-3 gap-4 place-items-center mt-6 md:mt-0 px-4">
            <Product imgUrl="/images/ring.jpg" name="The One Ring" price={price} />
            <Product imgUrl="/images/ring.jpg" name="The One Ring" price={price} />
            <Product imgUrl="/images/ring.jpg" name="The One Ring" price={price} />
            <Product imgUrl="/images/ring.jpg" name="The One Ring" price={price} />
            <Product imgUrl="/images/ring.jpg" name="The One Ring" price={price} />
        </section>
    );
};
export default CategoryItemsLayout;
