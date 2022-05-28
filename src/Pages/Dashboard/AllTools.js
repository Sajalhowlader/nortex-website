import React from 'react';
import { useNavigate } from 'react-router-dom';

const AllTools = ({ tool, handleDelete }) => {
    const { _id, name, img, dis, price, minOrder, available } = tool;
    const navigate = useNavigate()
    const handleAdd = () => {
        navigate('/dashboard/addProduct')
    }
    return (
        <>
            <div className="tools-card">
                <div className="card-img">
                    <img src={img} alt="" />
                </div>
                <div className="card-info">
                    <h2>{name}</h2>
                    <div className="order-able">
                        <p>Min Order: {minOrder}</p>
                        <p>Available: {available}</p>
                    </div>
                    <p className="price">Price: ${price}</p>
                    <p className="dis">Description:{dis.slice(0, 70) + "..."}</p>
                    <div className='d-flex gap-8'></div>
                </div>
            </div>
        </>
    );
};

export default AllTools;