import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
            <h1 className="uppercase tracking-widest font-medium text-2xl text-center">
                Categories
            </h1>

            <div className="mt-12">
                <div className={`lg:hidden ${isMobile ? "" : "hidden"}`}>
                    <Swiper>
                        {categoriesList.map((category, index) => (
                            <SwiperSlide key={index}>
                                <Category imgUrl={category.imgUrl} categoryName={category.name} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="hidden justify-between lg:flex ">
                    {categoriesList.map((category, index) => (
                        <Category
                            key={index}
                            imgUrl={category.imgUrl}
                            categoryName={category.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Categories;
