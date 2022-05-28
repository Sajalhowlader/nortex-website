import React, { useEffect, useState } from 'react';
import ShowAllProducts from './ShowAllProducts';

const AllProducts = () => {
    const [allTools, setAllTools] = useState([])


    useEffect(() => {
        fetch("https://intense-brook-95091.herokuapp.com/tools")
            .then((res) => res.json())
            .then((data) => setAllTools(data));
    }, []);

    return (
        <>
            <section className=" bg-tools">
                <div className="container mx-auto">
                    <div className="title">
                        <h1>ALL TOOLS</h1>
                    </div>
                    <div className="allTooles">
                        {allTools.map((tool) => (
                            <ShowAllProducts key={tool._id} tool={tool} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllProducts;