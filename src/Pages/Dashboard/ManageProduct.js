import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AllTools from './AllTools';

const ManageProduct = () => {

    const [allTools, setAllTools] = useState([])
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tools")
            .then((res) => res.json())
            .then((data) => setAllTools(data));
    }, []);
    const handleDelete = (id) => {
        console.log(id);
        const areYouSure = window.confirm("Are you want to Delete your Items")
        if (areYouSure) {
            const url = `https://aqueous-brook-47293.herokuapp.com/tools/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast.success("Delete Successfully")
                        const remaining = tools.filter(tool => tool._id !== id)
                        setTools(remaining)
                    }
                })
        }
    }
    return (
        <section className=" bg-tools">
            <div className="container mx-auto">
                <div className="title">
                    <h1>TOOLS</h1>
                </div>
                <div className="allTooles">
                    {allTools.map((tool) => (
                        <AllTools key={tool._id} tool={tool} all={handleDelete} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManageProduct;