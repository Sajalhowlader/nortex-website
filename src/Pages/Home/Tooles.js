import { useEffect, useState } from "react";
import imgUnder from "../../images/svg/banner-1.jpg";
import ShowTools from "./ShowTools";
const Tooles = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <>
      <section className=" bg-tools">
        <div className="container mx-auto">
          <div className="title">
            <h1>New Arrival</h1>
          </div>
          <div className="allTooles">
            {tools.slice(0, 6).map((tool) => (
              <ShowTools key={tool._id} tool={tool} />
            ))}
          </div>
        
        </div>
      </section>
    </>
  );
};

export default Tooles;
