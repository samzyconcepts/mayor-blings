import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

// SwiperJs
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// components
import Category from "./ui/CategoryItem";

const CategoriesList = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const categories = useSelector((state: RootState) => state.categories.categories);

    // Checking if the device is mobile
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // initial check
        handleResize();

        // Event listener to window resize
        window.addEventListener("resize", handleResize);

        // cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="container mx-auto md:px-24 py-10">
            <h1 className="uppercase tracking-widest font-medium text-lg md:text-2xl text-center">
                Categories
            </h1>

            <div className="mt-6 md:mt-12">
                <div className={`lg:hidden ${isMobile ? "" : "hidden"}`}>
                    <Swiper
                        className="swiper"
                        navigation={true}
                        slidesPerView={"auto"}
                        spaceBetween={0}
                        centeredSlides={true}
                        modules={[Navigation]}>
                        {categories &&
                            categories.map(({ id, category_name, category_image }) => (
                                <SwiperSlide className="flex justify-center" key={id}>
                                    <Category
                                        id={id}
                                        imgUrl={category_image}
                                        categoryName={category_name}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>

                <div className="hidden md:flex justify-center flex-wrap gap-4">
                    {categories &&
                        categories.map(({ id, category_name, category_image }) => (
                            <Category
                                key={id}
                                id={id}
                                imgUrl={category_image}
                                categoryName={category_name}
                            />
                        ))}
                </div>
            </div>

            {/* CSS for changing navigation button color */}
            <style>{`
                .swiper-button-prev,
                .swiper-button-next {
                    color: grey;
                }
            `}</style>
        </section>
    );
};
export default CategoriesList;
