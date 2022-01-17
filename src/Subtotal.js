import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from "react-router-dom";

function Subtotal() {
    const [{ user }] = useStateValue();
    const navigate = useNavigate();
    const [{ basket, quantity }] = useStateValue();

    const redirect = () => {
        if (!user) {
            navigate("/login");
        } else {
            navigate("/payment");
        }
    }
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({quantity} items): <strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={redirect}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
