import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/pazarSlice";
import { ToastContainer, toast } from "react-toastify";


const Product = () => {
  
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQuantity, setBaseQuantity] = useState(1);
  const location = useLocation();

  // let outOfStock = {details[rating][count]};

  useEffect(() => {
    // console.log(details.rating.count);
    setDetails(location.state.item);
  }, []);

  // console.log(location.state.item.rating.count);

  return (
    <div className="Product">
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <div className="w-full overflow-hidden relative">
            <img
              src={details.image}
              alt="productImage"
              className="w-full object-cover p-20"
            />
          </div>
          <div className="">
            {location.state.item.rating.count <= 100 && (
              <p className=" bg-amber-800 text-white p-2 m-2 text-center">
                Out of Stock
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">{details.title}</h2>
          <p>price: ${details.price}</p>
          <p>rating: {location.state.item.rating.rate}</p>
          <p>{details.description}</p>
          {location.state.item.rating.count > 100 && (
            <div className=" w-40 text-sm flex item-center justify-between gap-4 font-thin">
              <p className="">Quantity</p>
              <div className="flex item-center gap-4">
                <button
                  onClick={() =>
                    setBaseQuantity(
                      baseQuantity === 1 ? (baseQuantity = 1) : baseQuantity - 1
                    )
                  }
                  className=" text-amber-900 hover:text-amber-500 hover:bg-amber-900 flex items-center justify-center w-[20px] cursor-pointer border border-amber-900"
                >
                  -
                </button>
                <span>{baseQuantity}</span>
                <button
                  onClick={() => setBaseQuantity(baseQuantity + 1)}
                  className=" text-amber-900 hover:text-amber-500 hover:bg-amber-900 flex items-center justify-center w-[20px] cursor-pointer border border-amber-900"
                >
                  +
                </button>
              </div>
            </div>
          )}
          {location.state.item.rating.count > 100 && (
            <button onClick={() => dispatch(addToCart({
                id: details.id,
                title: details.title,
                price: details.price,
                description: details.description,
                category: details.category,
                image: details.image,
                rate: details.rating.rate,
                count: details.rating.count,
                quantity: baseQuantity,
              })) & toast.success(`${details.title} is added`)}
            className="w-[130px] text-amber-900 hover:text-amber-500 hover:bg-amber-900 flex items-center gap-1 top-0 cursor-pointer border border-amber-900 p-2 duration-500">
              <MdAddShoppingCart />
              <p>Add to Cart</p>
            </button>
          )}
          <div className="pt-4 m-1 text-lg text-black">
            Category: {details.category}
          </div>
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

export default Product;
