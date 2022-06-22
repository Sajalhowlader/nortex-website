import CountUp from "react-countup";
import { FaChartLine, FaGrinStars, FaUserFriends } from "react-icons/fa";
const Summary = () => {
  return (
    <section>
      <div className="title">
        <h1>Business Summary</h1>
      </div>
      <div className="bg-summary">
        <div className="container mx-auto">
          <div className="business-container">
            <div className="info_container">
              <div className="business-info">
                <div className="icon">
                  <FaUserFriends />
                </div>
                <div className="details">
                  <h1>
                    <CountUp end={1000} />
                    <span> +</span>
                    <br />
                    <p className="countInfo">Happy Customers</p>
                  </h1>
                </div>
              </div>
            </div>
            <div className="info_container">
              <div className="business-info">
                <div className="icon">
                  <FaChartLine />
                </div>
                <div className="details">
                  <h1>
                    <CountUp end={500} />
                    <span>M +</span>
                    <br />
                    <p className="countInfo">Annual revenue</p>
                  </h1>
                </div>
              </div>
            </div>
            <div className="info_container">
              <div className="business-info">
                <div className="icon">
                  <FaGrinStars />
                </div>
                <div className="details">
                  <h1>
                    <CountUp end={35} />
                    <span>K +</span>
                    <br />
                    <p className="countInfo"> Reviews</p>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Summary;
