import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
const CheckoutForm = ({ payment }) => {
  const { total, email, userName } = payment;
  const stripe = useStripe();
  const elements = useElements();
  // const [errors, setErrors] = useState("");
  // const [cardError, setCardError] = useState("");
  // const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const Swal = require("sweetalert2");
  useEffect(() => {
    if (total) {
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ total }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [total]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: email,
          },
        },
      });

    // setCardError(intentError?.message || "");
    // setSuccess("");
    // if (intentError) {
    //   setCardError(intentError?.message);
    // } else {
    //   setCardError("");
    //   setSuccess("sucess");
    //

    if (intentError) {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-center",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

      Toast.fire({
        icon: "error",
        title: intentError?.message,
      });
    } else {
      Swal.fire({
        title: "Congrats",
        text: "Pay successfull",
        showCloseButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
        icon: "success",
        width: "30em",
        footer: `Transaction Id ${paymentIntent.id}`,
      });
    }

    // setSuccess('');
    // setProcessing(true);
    // // confirm card payment
    // const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
    //     clientSecret,
    //     {
    //         payment_method: {
    //             card: card,
    //             billing_details: {
    //                 name: name,
    //                 email: email
    //             },
    //         },
    //     },
    // );

    // if (intentError) {
    //     setCardError(intentError?.message);
    //     setProcessing(false);
    // }
    // else {
    //     setCardError('');
    //     setTransactionId(paymentIntent.id);
    //     console.log(paymentIntent);
    //     setSuccess('Congrats! Your payment is completed.')

    //     //store payment on database
    //     const payment = {
    //         appointment: _id,
    //         transactionId: paymentIntent.id
    //     }
    //     fetch(`http://localhost:5000/${_id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json',
    //             'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //         body: JSON.stringify(payment)
    //     }).then(res => res.json())
    //         .then(data => {
    //             setProcessing(false);
    //             console.log(data);
    //         })

    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-xs bg-green-600 mt-8 border-0"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {/* {cardError && <p className="text-red-500">{cardError}</p>}
      {success && <p className="text-green-500">{success}</p>} */}
    </>
  );
};

export default CheckoutForm;
