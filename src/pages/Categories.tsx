import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

function Categories() {
    const { categoryId } = useParams();
    const categories = useSelector((state: RootState) =>
        state.categories.categories.filter(({ id }) => id == categoryId)
    );
    return (
        <>
            <Navbar />
            <div className="container mx-auto pt-10 pb-3 px-2 md:px-0 border-b-2">
                <h1 className="font-medium text-3xl">CATEGORIES</h1>
                <h3 className="text-xl uppercase mt-2">
                    {categories.map(({ category_name }) => category_name)}
                </h3>
            </div>

            <section className="container mx-auto py-5 md:py-10 grid grid-cols-1 md:grid-cols-5 border-b-2">
                <Sidebar />
                <Outlet />
            </section>
            <Footer />
        </>
    );
}
export default Categories;
