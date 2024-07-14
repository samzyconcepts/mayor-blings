import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProductImageSlide = ({ images }: { images: string[] }) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleClick = (image: string) => {
        setSelectedImage(image);
    };

    return (
        <div>
            {/* Desktop view */}
            <div className="hidden md:grid grid-cols-8 gap-4">
                <div className="flex flex-col gap-4">
                    {/* To run through images array */}
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index}`}
                            onClick={() => handleClick(image)}
                            className="cursor-pointer"
                        />
                    ))}
                </div>

                <img
                    src={selectedImage}
                    alt="Selected image"
                    className="col-start-2 col-end-9 w-full h-[600px] object-cover"
                />
            </div>

            {/* Mobile view */}
            <div className="md:hidden">
                <Swiper
                    slidesPerView={"auto"}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="swiper">
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-[322px] mb-10">
                                <img
                                    src={image}
                                    alt={`Thumbnail ${index}`}
                                    className="block w-full h-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};
export default ProductImageSlide;
