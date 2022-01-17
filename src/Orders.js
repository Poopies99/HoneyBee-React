import React, { useState, useEffect } from 'react';
import { db } from "./Firebase";
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
            <h1> {!user ? "Please login to view order history" : "Your Orders"}</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders