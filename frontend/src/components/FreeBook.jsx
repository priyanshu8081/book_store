import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import SlickSlider from "react-slick";
import Card from './Card.jsx';
const Slider = SlickSlider.default || SlickSlider;
const FreeBook = () => {
    const filterList = list.filter((data) => data.category === "free");


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // 👈 for 430px
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ]
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className='ms-3'>
                    <h1 className='font-bold text-xl pb-2 mt-4 md:mt-2'>Free books offer 100%</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque consectetur tenetur sapiente veritat,Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni itaque veritat.</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {filterList.map((items) => (
                            <Card items={items} key={items.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default FreeBook
