import { useEffect, useState } from "react";
import ShowTools from "./ShowTools";

const Tooles = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
// http://localhost:5000/tools
  return (
    <>
      <section className=" bg-tools">
        <div className="container mx-auto">
          <div className="title">
            <h1>TOOLS</h1>
          </div>
          <div className="allTooles">
            {tools.slice(0, 8).map((tool) => (
              <ShowTools key={tool._id} tool={tool} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tooles;
