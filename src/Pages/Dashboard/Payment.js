import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L4IKhHZ8E6UAH6wo8gGmAaGdTRFfdcetA4PEjj5NpaemH63c7JSuGXUirsHeBRNIFG05ivqkwaR1NsqyKZENLh600qfr9Hovx');
const Payment = () => {
    const { paymentId } = useParams()
    const [payment, setPayment] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/getMyItems/${paymentId}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [paymentId])
    return (
        <>
            <h1 className="text-center font-bold text-2xl mb-8">Payment</h1>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">

                <figure className="px-10 pt-10">
                    <img src={payment.img} alt="tools" className="h-32 w-32 rounded-full border-red-500 border" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{payment.name}</h2>
                    <p>Price: ${payment.price}</p>
                    <p>Order Qunatity: ${payment.order}</p>

                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment} />
                    </Elements>
                </div>
            </div>

        </>
    );
};

export default Payment;