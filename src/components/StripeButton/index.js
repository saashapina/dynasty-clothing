import StripeCheckout from "react-stripe-checkout";

export const StripeButton = ({ price }) => {
  const priceForStipe = price * 100; // stripe needs price in cents
  const publishableKey =
    "pk_test_51J0ut8Ijy8MNxpWvHIly5HGTkSwfIWiTwodEmrCPjdiHEHtBLjYZCKsT8zgOW1EHBbPKTRgJe1ywVO9er2xhFkbz0003GipYda";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Dynasty Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStipe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
