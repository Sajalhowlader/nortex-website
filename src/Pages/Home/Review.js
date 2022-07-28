import { FaStar } from "react-icons/fa";
import { useQuery } from "react-query";
import PreLoader from "../Shared/PreLoader";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const Review = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("http://localhost:5000/reviews", {
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <section className="review-sec">
      <div className="title">
        <h1>HAPPY CUSTOMERS</h1>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: -50,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper sw-pd"
      >
        {reviews.map((review) => (
          <SwiperSlide className="swi">
            <div className="review-container">
              <div className="color"></div>
              <div className="reviewer-info">
                <div className="avatar">
                  <div className="w-36 rounded-full ring ring-white ring-offset-base-100 ">
                    <img src={review.img} alt="" />
                  </div>
                </div>
                <h2 className="cs-name uppercase">{review.name}</h2>
                <p className="flex justify-center text-[#e90e3d] ">
                  {[...Array(parseInt(review.star))].map((start, index) => {
                    return <FaStar className="mx-1" key={index} />;
                  })}
                </p>
                <p className="cs-revies">{review.review}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="container mx-auto cs-container">
        
      </div> */}
    </section>
  );
};

export default Review;
