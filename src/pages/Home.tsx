// Components
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";

// images
import HeroImg from "../assets/hero-image.jpg";

function Home() {
    return (
        <>
            <Navbar />
            <header>
                <div className="container mx-auto md:px-24 py-10">
                    <h1 className="text-4xl md:text-6xl text-center md:pt-24 md:leading-snug">
                        Elevate Your Style: <br /> Unveil the Brilliance of Our Luxurious <br />
                        Jewelry Creations!
                    </h1>

                    <img className="mt-8" src={HeroImg} alt="Jewelries" />
                </div>
            </header>
            <Categories />  
        </>
    );
}
export default Home;
