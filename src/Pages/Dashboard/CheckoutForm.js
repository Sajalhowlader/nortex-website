import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { async } from '@firebase/util';
const CheckoutForm = ({ payment }) => {
    const { price } = payment
    console.log(price);
    const stripe = useStripe();
    const elements = useElements();
    const [errors, setErrors] = useState('')
    const [clientSecret, setClientSecret] = useState('');
    // useEffect(() => {
    //     fetch('http://localhost:5000/create-payment-intent', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify({ price })
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data?.clientSecret) {
    //                 setClientSecret(data.clientSecret);
    //             }
    //         });

    // }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setErrors(error?.message || '')


    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-xs bg-green-600 mt-8' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                errors && <strong className='text-red-600 font-bold'>{errors}</strong>
            }
        </>
    );
};

export default CheckoutForm;