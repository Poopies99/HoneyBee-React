import React from 'react'
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{ basket, user }, action] = useStateValue();
    
    const key = 'id';

    const uniqueItems = [...new Map(basket.map(item => [item[key], item])).values()];

    console.log(basket);

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img
                    className="checkout__ad"
                    src="https://blog.hubspot.com/hubfs/How%20to%20Explain%20Banner%20Ads%20to%20Anyone-5.png"
                    alt=""
                />

                <div>
                    <h3>Hello {user ? user.email : "Guest"}</h3>
                </div>

                <div className='checkout__title'>
                    Your Shopping Basket
                </div>

                <div className='checkout__products'>
                    {uniqueItems.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            quantity={item.quantity}
                        />
                    ))}                  
                </div>
            </div>
            
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout