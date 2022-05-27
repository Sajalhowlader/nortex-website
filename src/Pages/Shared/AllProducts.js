import React, { useEffect, useState } from 'react';

const AllProducts = () => {
    const [allTools, setAllTools] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/tools")
            .then((res) => res.json())
            .then((data) => setAllTools(data));
    }, []);
    return (
        <div>

        </div>
    );
};

export default AllProducts;