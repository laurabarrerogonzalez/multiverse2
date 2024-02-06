import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './TextCarousel.css'

const TextCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000, // Velocidad de desplazamiento
    autoplaySpeed: 2000, // Tiempo de espera entre desplazamientos
    pauseOnHover: false, // Evita que se detenga al pasar el mouse sobre el carrusel
    arrows: false, // Opcional: para ocultar las flechas de navegación
  };

  const textItems = [
    "Discover our amazing freaky products...!",
    "Did you realise that you needed everything...?",
    "Well, easy, BUY IT ALL !!!!",
   
  ];

  return (
<div className="text-carousel-container">
    <Slider {...settings}>
      {textItems.map((text, index) => (
        <div key={index} className="text-carousel-item">
          <p>{text}</p>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default TextCarousel;