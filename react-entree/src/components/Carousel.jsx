import React from 'react'
import carousel1 from '../images/carousel1.jpg'
import carousel2 from '../images/carousel2.jpg'
import carousel3 from '../images/carousel3.jpg'
import '../css/Carousel.css'


function Carousel() {
  return (
    <div>
        <div id="carouselExampleAutoplaying" class="carousel slide container mt-2" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active blo_img">
                    <img src={carousel3} class="d-block  car_img" alt="..."/>
                </div>

                <div class="carousel-item blo_img">
                    <img src={carousel2} class="d-block car_img " alt="..."/>
                </div>

                <div class="carousel-item blo_img">
                    <img src={carousel1} class="d-block car_img" alt="..."/>
                </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}

export default Carousel
