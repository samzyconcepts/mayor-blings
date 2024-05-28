import Button from "../ui/Button";
const Product = () => {
    return (
        <section className="col-start-2 col-end-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl">Products</h1>
                <Button variant="secondary">Create Product</Button>
            </div>

            {/* table list of the products goes here with each product having a button to update and delete */}
            
        </section>
    );
};

export default Product;
