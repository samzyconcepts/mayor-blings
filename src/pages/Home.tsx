// Components
import Navbar from "../components/Navbar";
import CategoriesList from "../components/CategoriesList";
import FeaturedPRD from "../components/FeaturedPRD";
import Footer from "../components/Footer";
import ScrollTop from "../util/ScrollTop";

// images
import HeroImg from "../assets/hero-image.jpg";

function Home() {
    return (
        <>
            <Navbar />
            <header>
                <div className="container mx-auto md:px-24 py-10">
                    <h1 className="text-2xl md:text-6xl px-2 md:px-0 text-center md:pt-24 md:leading-snug">
                        Elevate Your Style: <br /> Unveil the Brilliance of Our Luxurious <br />
                        Jewelry Creations!
                    </h1>

                    <img className="mt-8" src={HeroImg} alt="Jewelries" />
                </div>
            </header>
            <CategoriesList />
            <FeaturedPRD />
            <Footer />
            <ScrollTop />
        </>
    );
}
export default Home;
