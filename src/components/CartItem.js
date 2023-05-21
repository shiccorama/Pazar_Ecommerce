import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { RiArrowLeftCircleFill } from "react-icons/ri";
import {
  incrementQuantity,
  decrementQuantity,
  deleteItem,
  resetCart,
} from "../redux/pazarSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const CartItem = () => {

  const productData = useSelector((state) => state.pazar.productData);
    console.table(productData);
  const dispatch = useDispatch();
//   let [baseQuantity, setBaseQuantity] = useState(1);

  return (
    <div className="CartItem w-2/3 pr-8">
      <div className="w-full">
        <h2 className="p-2 text-xl font-medium">Contents of shopping Cart</h2>
      </div>
      <div className="">
        {productData.map((item) => (
          <div
            className="flex items-center justify-between gap-3 mt-3"
            key={item.id}
          >
            <div className="flex items-center gap-2 h-40">
              <MdOutlineClose
                onClick={() =>
                  dispatch(deleteItem(item.id)) &
                  toast.error(`${item.title} is removed`)
                }
                className="text-xl text-amber-500 hover:text-amber-900 cursor-pointer duration-300"
              />
              <img
                className="w-24 object-cover"
                src={item.image}
                alt="smallProductImage"
                loading="lazy"
              />
            </div>
            <p className="w-24">{item.title}</p>
            <p className="p-10 w-8">${item.price}</p>
            <div className="w-40 text-sm flex gap-2 font-thin">
              <p className="text-sm">Quantity</p>
              <div className="flex item-center gap-2">
                <button
                  onClick={() =>
                    dispatch(
                        decrementQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className=" text-amber-900 hover:text-amber-500 hover:bg-amber-900 flex items-center justify-center w-[20px] cursor-pointer border border-amber-900"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      incrementQuantity({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className=" text-amber-900 hover:text-amber-500 hover:bg-amber-900 flex items-center justify-center w-[20px] cursor-pointer border border-amber-900"
                >
                  +
                </button>
              </div>
            </div>
            <div className="">
              <p className="w-16">${item.quantity * item.price}</p>
            </div>
          </div>
        ))}
      </div>
            <button
            className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
            onClick={() =>
            dispatch(resetCart()) & toast.error("Your cart is empty!")
            }
        >
            Reset Cart
        </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-amber-500 hover:text-amber-900 duration-300">
          <RiArrowLeftCircleFill />
          <span>Go Shopping</span>
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={2000}
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
  );
};

export default CartItem;
