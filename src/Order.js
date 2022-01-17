import React from 'react'
import './Order.css'
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import OrderProduct from "./OrderProuduct";

function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            {/* <p>{moment.unix(order.data.).format("MMMM Do YYYY, h:mma")}</p> */}
            <p className="order__id">
                <small>Database ID: {order.id}</small>
            </p> 

            <div className="order__detail">
                {order.data.cart?.map(item => (
                    <OrderProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        quantity={item.quantity}
                        hideButton
                    />
                ))}
            </div>
            
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />   
        </div>
    )
}

export default Order