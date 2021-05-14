import React from 'react';
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IqywnLuUQMRwx3u5kKwvUJtvLmTzAcHVIa2TtFSqW0laIDgkq1Y3IwA3Ts5OJzDooBuEybzpFhzjoUIygIjvz0g00J6o6JGNm'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://image.shutterstock.com/image-vector/crown-vector-icon-filled-flat-260nw-1260791017.jpg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;