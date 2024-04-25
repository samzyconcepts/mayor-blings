import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// components
import Category from "./ui/Category";
import categoriesList from "../util/categoriesList.json";

const Categories = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

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
                        {categoriesList.map((category, index) => (
                            <SwiperSlide className="flex justify-center" key={index}>
                                <Category imgUrl={category.imgUrl} categoryName={category.name} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="hidden md:flex justify-center flex-wrap gap-4">
                    {categoriesList.map((category, index) => (
                        <Category
                            key={index}
                            imgUrl={category.imgUrl}
                            categoryName={category.name}
                        />
                    ))}
                </div>
            </div>

            {/* CSS for changing navigation button color */}
            <style tsx="true">{`
                .swiper-button-prev,
                .swiper-button-next {
                    color: grey;
                }
            `}</style>
        </section>
    );
};
export default Categories;
