import React from "react"
import "./ppost.scss"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ppost } from "../../../../dummydata"
import Heading from "../../../master/heading/Heading"

export const Ppost = () => {

    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "0",
        dots: true,
        slidesToShow: 1,
        rows: 1,
        slidesPerRow: 2,
        speed: 500,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 1,
                    slidesPerRow: 1,
                },
            },
        ],
    }

    return (
        <>

            <section className='popular'>
                <Heading title='Popular Post' />
                <div className='content'>
                    <Slider {...settings}>
                        {ppost.map((val, index) => {
                            return (
                                <div key={index} className='items'>
                                    <div className='box shadow'>
                                        <div className='images row'>
                                            <div className='img'>
                                                <img src={val.cover} alt='' />
                                            </div>
                                            <div class='category category1'>
                                                <span>{val.category}</span>
                                            </div>
                                        </div>
                                        <div className='text row'>
                                            <h1 className='title'>{val.title.slice(0, 40)}</h1>
                                            <div className='date'>
                                                <i class='fas fa-calendar-days'></i>
                                                <label>{val.date}</label>
                                            </div>
                                            <div className='comment'>
                                                <i class='fas fa-comments'></i>
                                                <label>{val.comments}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </section>

        </>
    )
}
