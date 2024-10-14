import React from 'react'
import carousel1 from '../images/carousel1.jpg'
import carousel2 from '../images/carousel2.jpg'
import carousel3 from '../images/carousel3.jpg'
import '../css/Carousel.css'


function Carousel() {
  return (
    <div>
        <div id="carouselExampleAutoplaying" className="carousel slide container mt-2" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active blo_img">
                    <img src={carousel3} className="d-block  car_img" alt="..."/>
                </div>

                <div className="carousel-item blo_img">
                    <img src={carousel2} className="d-block car_img " alt="..."/>
                </div>

                <div className="carousel-item blo_img">
                    <img src={carousel1} className="d-block car_img" alt="..."/>
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Carousel
