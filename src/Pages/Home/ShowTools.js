import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ShowTools = ({ tool }) => {
  const { _id, name, img, dis, price, minOrder, available, star } = tool;
  const navigate = useNavigate();

  const handlePurchase = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <>
      <div className="tools-card">
        <div className="new">
          <span>new</span>
        </div>
        <div className="tools-containers">
          <div className="card-img">
            <img src={img} alt="" />
            <p className="stars mt-[-130px] text-[#e90e3d] ">
              {[...Array(parseInt(star))].map((start, index) => {
                return <FaStar className="my-2" key={index} />;
              })}
            </p>
            <h2>{name}</h2>
          </div>
          <div className="card-info">
            <p className="price">Price: ${price}</p>
            <div className="order-able">
              <p>Min Order: {minOrder}</p>
              <p>Available: {available}</p>
            </div>
            <p className="dis">Description:{dis.slice(0, 70) + "..."}</p>
            <div className="mx-auto order-btn">
              <button onClick={() => handlePurchase(_id)} className="care-btn">
                Order
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default ShowTools;
