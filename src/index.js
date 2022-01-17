import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Header from './Header';
import { StateProvider, useStateValue } from './StateProvider';
import reducer, { initialState } from './reducer';
import Login from './Login';
import { auth } from "./Firebase";
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';
import Footer from './Footer';

//public key
const promise = loadStripe("pk_test_51KFcBsAVjzb9hNmwDxyaEpRnvJtoDbbBz0c4IagMdXYelUrgrSmX7Gectwl1JYeK2BY2CVx2OaQzYDonnM3NnUTv00LWSx5z1k");

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Main />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

function Main() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/payment' element={<PaymentPage  />} />
          <Route path='/orders' element={<OrdersPage />} />
        </Routes>
    </Router>
  )
}

function CheckoutPage() {
  return (
    <div>
      <Header />
      <Checkout />
    </div>
  )
}

function LoginPage() {
  return (
    <div>
      <Login />
    </div>
  )
}

function PaymentPage() {
  return (
    <div>
      <Header />
      <Elements stripe={promise}>
        <Payment />
      </Elements>
    </div>
  )
}

function OrdersPage() {
  return (
    <div>
      <Header />
      <Orders />
    </div>
  )
}

reportWebVitals();
