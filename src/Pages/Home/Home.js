import homeToolsImg from "../../images/homeToolsImg.png";
// import homeImg from '../../images/banner-1-removebg-preview.png'
import Contacts from "./Contacts";
import Partner from "./Partner";
import Review from "./Review";
import Summary from "./Summary";
import Tooles from "./Tooles";
const Home = () => {
  return (
    <>
      <div className="home-background ">
        <div className="system-grid container mx-auto">
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="left-side"
          >
            <h2>
              The Better Solution For <br />
              Your Business
            </h2>
            <p>We are always with you.We provide you our best service.</p>
            <div className="flex home-btn">
              <button>Let's Go</button>
              <button>Explore More</button>
            </div>
          </div>
          <div data-aos="fade-down" data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out" className="right-side" >
            <img src={homeToolsImg} alt="" />
          </div>
        </div>
      </div>
      <Tooles />
      <Summary />
      <Review />
      <Partner />
      <Contacts />
    </>
  );
};

export default Home;
