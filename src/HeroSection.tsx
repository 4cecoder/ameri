import { FC } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection: FC = () => {
    // Define an array of images in the gallery
    const imageGallery = [
        "http://www.ameripanelsc.com/assets/images/CHAVIS_PHIPPS_167.9344457_large.jpg",
        "http://www.ameripanelsc.com/assets/images/CHAVIS_PHIPPS_235.29970447_std.jpg",
        "http://www.ameripanelsc.com/assets/images/old_hilton_001.9344616_large.JPG",
    ];

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <FontAwesomeIcon icon={faChevronRight} className={className} style={{ ...style, display: "block", color: "white" }} onClick={onClick} />
        );
    };

    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <FontAwesomeIcon icon={faChevronLeft} className={className} style={{ ...style, display: "block", color: "white" }} onClick={onClick} />
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <main role="main" className="flex-auto p-32 max-w-6xl ml-32">
            <div className="bg-gray-900 py-20 flex justify-center items-center">
                <div className="container mx-auto px-4 ">
                    <Slider {...settings}>
                        {imageGallery.map((image, index) => (
                            <img
                                key={index}
                                className="ml-44 mb-6 max-w-lg min-w-0 h-72 rounded object-cover"
                                src={image}
                                alt={`Construction Image ${index + 1}`}
                            />
                        ))}
                    </Slider>
                    <h3 className="text-4xl font-bold mb-2">
                        Step into the Future with AmeriPanel Homes
                    </h3>
                    <p className="text-lg mb-4">
                        Embrace the innovation of our homes, crafted with Structural Insulated Panels (SIPs).
                    </p>
                    <p className="text-lg mb-4">
                        Experience walls that are not just walls but a revolutionary approach to insulation and dust energy efficiency.
                    </p>
                    <hr className="my-4" />
                    <p className="text-lg mb-4">
                        Ditch traditional houses and their limitations. Introduce yourself to a home that offers unprecedented energy efficiency, user-friendly design, and sustainability.
                    </p>
                    <p className="text-lg mb-8">
                        Click below to learn more about why AmeriPanel is the future of comfortable living.
                    </p>
                    <a className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-600 text-white text-lg" href="#" role="button">
                        Discover AmeriPanel Homes
                    </a>
                </div>
            </div>
        </main>
    );
};

export default HeroSection;