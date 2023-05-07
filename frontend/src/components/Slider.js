import React, { useEffect, useState } from "react";
import slide1 from "../assets/slider.png";
import slide2 from "../assets/slider2.jpg";
import slide3 from "../assets/slider3.jpg";
import { Link } from "react-router-dom";

export function Slider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  const slides = [
    {
      image: slide1,
      caption: {
        h4: "",
        h2: "Discover the rich cultural heritage of",
        h1: "Sri Lanka with Culture Trail.",
        p: "",
      },
      button: "Shop Now",
    },
    // {
    //   image: slide2,
    //   caption: {
    //     h4: "",
    //     h2: "Explore hidden gems and historical landmarks",
    //     h1: "with our knowledgeable guides.",
    //     p: "",
    //   },
    //   button: "Shop Now",
    // },
    {
      image: slide3,
      caption: {
        h4: "",
        h2: "Discover the Culture Trail's unique handmade crafts,",
        h1: "showcasing the best of local craftsmanship and design.",
        p: "",
      },
      button: "Shop Now",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((activeSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <section id="slider">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li
              key={index}
              data-target="#carouselExampleIndicators"
              data-slide-to={index}
              className={index === activeSlide ? "active" : ""}
              onClick={() => handleSlideChange(index)}
            ></li>
          ))}
        </ol>
        <div className="carousel-inner">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={
                index === activeSlide ? "carousel-item active" : "carousel-item"
              }
            >
              <img
                className="d-block w-100"
                src={slide.image}
                alt={`Slide ${index}`}
              />
              <div className="carousel-caption d-none d-md-block">
                <h4>{slide.caption.h4}</h4>
                <h2>{slide.caption.h2}</h2>
                <h1>{slide.caption.h1}</h1>
                <p>{slide.caption.p}</p>
                <Link to={"./buyer/product"} style={{ textDecoration: "none" }}>
                  <button>{slide.button}</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          onClick={() =>
            handleSlideChange(
              activeSlide === 0 ? slides.length - 1 : activeSlide - 1
            )
          }
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          onClick={() =>
            handleSlideChange(
              activeSlide === slides.length - 1 ? 0 : activeSlide + 1
            )
          }
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section>
  );
}
