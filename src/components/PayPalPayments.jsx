import { PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPayments = () => {
    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: '299.00', // Your product fee
                },
                description: "medical service",
            }],
        });
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then((details) => {
            alert(`Transaction completed by ${details.payer.name.given}`);
            // Optionally handle post-transaction logic here
        });
    };

    return (
        <PayPalButtons
            createOrder={createOrder}
            onApprove={onApprove}
        />
    );
};

export default PayPalPayments;
