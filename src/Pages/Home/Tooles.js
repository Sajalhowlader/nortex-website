import React, { useEffect, useState } from "react";
import ShowTools from "./ShowTools";

const Tooles = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <>
      <section className="container mx-auto">
        <div className="tools">
          <h1>TOOLS</h1>
        </div>
        <div className="allTooles">
          {tools.map((tool) => (
            <ShowTools key={tool._id} tool={tool} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Tooles;
