import './cart.css'
import Button from "../button/button.jsx";
import {totalPrice} from "../../units/total-price.js";

const Cart = ({cartItems, onCheckout}) => {
    return (
        <div className="cart__container">
            <p>Umumiy narx: {totalPrice(cartItems).toLocaleString('en-US', {
                style: "currency",
                currency: 'USD'
            })}</p>
            <Button
                disable={cartItems.length === 0 ? true : false}
                title={`${cartItems.length === 0 ? 'Buyurtma berish' : "To'lov"}`}
                type={'checkout'}
                onClick={onCheckout}
            />
        </div>
    );
};

export default Cart;