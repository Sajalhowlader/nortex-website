
import { useQuery } from "react-query";
import PreLoader from "../Shared/PreLoader";
import ShowReviews from "./ShowReviews";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import '../CssFile/swipper.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


const Review = () => {
  const { data: reviews, isLoading } = useQuery("reviews", () =>
    fetch("http://localhost:5000/reviews", {
      headers: {
        "content-type": "application/json",
      }
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
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="container mx-auto cs-container">
        {reviews.map((review) => <ShowReviews review={review}/> )}
      </div>
        </SwiperSlide>
      </Swiper>

    </section>
  );
};

export default Review;
