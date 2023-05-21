import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { pexels7 } from "../assets";
import CartItem from "../components/CartItem";
import { ToastContainer, toast } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Cart = () => {
  
  const productData = useSelector((state) => state.pazar.productData);
  const userInfo =  useSelector((state) => state.pazar.userInfo);
  const [payNow, setPayNow] = useState(false);
  const [totalAmount, setTotalAmount] = useState("");

  const handleCheckout = () => {
    if(userInfo){
      setPayNow(true)
    }else{
      toast.error("Please sign in to Checkout");
    }
  };

  const payment = async(token) => {
    await axios.post("http://localhost:8000/pay", {
      amount:totalAmount * 100,
      token: token,
    })
  }

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price.toFixed(2));
  }, [productData]);

  return (
    <div className="Cart">
      <img className="w-full h-60 object-cover" src={pexels7} alt="cartImage" />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-amber-50 py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-amber-500 pb-6">
            <h2 className="text-xl font-medium">Total items in the cart</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span className="font-titleFont font-bold text-lg">
                $ {totalAmount}
              </span>
            </p>
            <p className="flex items-start gap-4 text-base">
              Shipping{" "}
              <span className="font-titleFont font-bold text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. (Most of countries = $ 20).
              </span>
            </p>
          </div>
          <p className="text-xl font-medium flex justify-between mt-6">
            {" "}
            Total <span className="text-xl font-bold"> $ {totalAmount} </span>
          </p>
          <button onClick={handleCheckout} className="w-full text-amber-900 hover:text-white hover:bg-green-600 flex justify-center items-center gap-1 top-0 cursor-pointer border border-amber-900 py-3 mt-6 duration-500">
            Proceed to Checkout
          </button>
          {
            payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51N9vwnI4HgKcQiJgaeKVUA1vZbjzUuOb27xHseW7XOAPS8cezdfT8yozIbDnTOT4qsOYXqXKndqNI08mcNHuS9Ks00rqTF4cmj"
                  name="Pazar Online Shopping"
                  amount={totalAmount * 100}
                  label="Pay With Your MasterCard Now"
                  description={`Your Payment amount is $${totalAmount}`}
                  token={payment}
                  email={userInfo.email}
                />
              </div>
            )
          }
        </div>
        <ToastContainer
          position="top-left"
          autoClose = {2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          />
      </div>
    </div>
  );
};

export default Cart;
