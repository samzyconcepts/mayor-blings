import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

// Components
import Navbar from "../components/Navbar";
import ProductDetail from "../components/ProductDetail";
import FeaturedPRD from "../components/FeaturedPRD";
import Footer from "../components/Footer";
import ScrollTop from "../util/ScrollTop";

function ProductDetailPage() {
    const { productId } = useParams();

    const product = useSelector((state: RootState) =>
        state.products.products.find((product) => product["id"] == productId)
    );

    return (
        <>
            <Navbar />
            <ProductDetail product={product} id={productId} />
            <FeaturedPRD />
            <Footer />
            <ScrollTop />
        </>
    );
}
export default ProductDetailPage;
