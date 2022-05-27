import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AllTools from './AllTools';

const ManageProduct = () => {

    const [allTools, setAllTools] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/tools")
            .then((res) => res.json())
            .then((data) => setAllTools(data));
    }, []);
    const handleDelete = (id) => {
        const areYouSure = window.confirm("Are you want to Delete your Items")
        if (areYouSure) {
            const url = `http://localhost:5000/deleteTools/${id}`
            fetch(url, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        toast.success("Delete Successfully")
                        const remaining = allTools.filter(tool => tool._id !== id)
                        setAllTools(remaining)
                    }
                })
        }
    }
    return (
        <section className=" bg-tools">
            <div className="container mx-auto">
                <div className="title">
                    <h1>ALL TOOLS</h1>
                </div>
                <div className="allTooles">
                    {allTools.map((tool) => (
                        <AllTools key={tool._id} tool={tool} handleDelete={handleDelete} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ManageProduct;