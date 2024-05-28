import Button from "../ui/Button";

const Category = () => {
    return (
        <section className="col-start-2 col-end-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl">Category</h1>
                <Button variant="secondary">Create Category</Button>
            </div>

            {/* table list of the categories goes here with each having a button to update and delete */}
        </section>
    );
};
export default Category;
