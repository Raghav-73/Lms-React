import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar1, Avatar2, Avatar5, Quote } from "../../imagepath";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import { ArrowLeft, ArrowRight } from "react-feather";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";

const Slide1 = () => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item-five">
        <div className="testimonial-quote">
          <img className="quote img-fluid home3Slide" alt="" src={Quote} />
        </div>
        <div className="testimonial-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            pretium feugiat tellus eget vitae sagittis id in. In in tempor ac
            dignissim at. Scelerisque sociis consequat sit dolor. Vitae donec
            porttitor risus tellus eget vitae sagittis id in. In in tempor ac
            dignissim at. Scelerisque sociis consequat{" "}
          </p>
        </div>
        <div className="testimonial-ratings">
          <div className="rating">
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star"></i>
            <p className="d-inline-block">
              4.5<span>ratings</span>
            </p>
          </div>
        </div>
        <div className="testimonial-users">
          <div className="imgbx">
            <img className="img-fluid" alt="" src={Avatar2} />
          </div>
          <div className="d-block">
            <h6>Jeff J. Sparrow</h6>
            <p>Designer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slide2 = () => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item-five">
        <div className="testimonial-quote">
          <img className="quote img-fluid home3Slide" alt="" src={Quote} />
        </div>
        <div className="testimonial-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            pretium feugiat tellus eget vitae sagittis id in. In in tempor ac
            dignissim at. Scelerisque sociis consequat sit dolor. Vitae donec
            porttitor risus tellus eget vitae sagittis id in. In in tempor ac
            dignissim at. Scelerisque sociis consequat{" "}
          </p>
        </div>
        <div className="testimonial-ratings">
          <div className="rating">
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star"></i>
            <p className="d-inline-block">
              4.5<span>ratings</span>
            </p>
          </div>
        </div>
        <div className="testimonial-users">
          <div className="imgbx">
            <img className="" alt="" src={Avatar1} />
          </div>
          <div className="d-block">
            <h6>Martin Harn</h6>
            <p>Docker Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Slide3 = () => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item-five">
        <div className="testimonial-quote">
          <img className="quote img-fluid home3Slide" alt="" src={Quote} />
        </div>
        <div className="testimonial-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
            pretium feugiat tellus eget vitae sagittis id in. In in tempor ac
            dignissim at. Scelerisque sociis consequat sit dolor. Vitae donec
            porttitor risus tellus eget vitae sagittis id in. In in tempor ac
            dignissim at. Scelerisque sociis consequat{" "}
          </p>
        </div>
        <div className="testimonial-ratings">
          <div className="rating">
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star filled"></i>
            <i className="fas fa-star"></i>
            <p className="d-inline-block">
              4.8<span>ratings</span>
            </p>
          </div>
        </div>
        <div className="testimonial-users">
          <div className="imgbx">
            <img className="" alt="" src={Avatar5} />
          </div>
          <div className="d-block">
            <h6>Noah Aarons</h6>
            <p>Business Man</p>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-between align-items-center">
              <div className="owl-nav slide-nav-8 nav-control">
                <button
                  type="button"
                  role="presentation"
                  className="owl-prev"
                >
                  <i className="fa-sharp fa-solid fa-arrow-left-long"></i>
                </button>
                <button
                  type="button"
                  role="presentation"
                  className="owl-next"
                >
                  <i className="fa-sharp fa-solid fa-arrow-right-long"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  var settings = {
    //autoWidth: true,
    items: 1,
    margin: 25,
    dots: false,
    nav: true,
    navText: [
      // eslint-disable-next-line react/jsx-key
      <ArrowLeft className="slideIcon" />,
      // eslint-disable-next-line react/jsx-key
      <ArrowRight className="slideIcon" />,
    ],

    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };
  return (
    <OwlCarousel {...settings} className="owl-carousel real-reviews owl-theme">
      <Slide1 />
      <Slide2 />
      <Slide3 />
    </OwlCarousel>
  );
};
export default Testimonial