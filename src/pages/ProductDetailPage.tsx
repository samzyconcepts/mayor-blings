import FeaturedPRD from "../components/FeaturedPRD";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductDetail from "../components/ProductDetail";

function ProductDetailPage() {
    return (
        <>
            <Navbar />
            <ProductDetail />
            <FeaturedPRD/>
            <Footer />
        </>
    );
}
export default ProductDetailPage;
