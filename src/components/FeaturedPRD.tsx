import Product from "./ui/Product";

const FeaturedPRD = () => {
    const price = 20;

    return (
        <section className="container mx-auto py-10">
            <h1 className="uppercase tracking-widest font-medium text-2xl text-center">
                featured products
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center">
                <Product imgUrl="/images/ring.jpg" name="The One Ring" price={price} />
                <Product imgUrl="/images/ring.jpg" name="The One Ring" price={price} />
                <Product imgUrl="/images/ring.jpg" name="The One Ring" price={price} />
                <Product imgUrl="/images/ring.jpg" name="The One Ring" price={price} />
                <Product imgUrl="/images/ring.jpg" name="The One Ring" price={price} />
            </div>
        </section>
    );
};
export default FeaturedPRD;
