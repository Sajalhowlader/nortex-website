import { FaStar } from "react-icons/fa";


const ShowReviews = ({review}) => {
    return (
<>
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
     return <FaStar className="mx-1" key={index} />
   })}
 </p>
 <p className="cs-revies">{review.review}</p>
</div>
</div>    
    </>);
};

export default ShowReviews;