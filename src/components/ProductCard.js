import React, { useRef } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/pazarSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductCard = ({ products }) => {
  const example = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  };
  // console.table(products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const from_title_to_slug = products.title.toLowerCase().split(" ").join("");

  const handleDetails = () => {
    // console.log(from_title_to_slug);
    navigate(`/product/${from_title_to_slug}`, {
      state: {
        item: products,
      },
    });
  };

  return (
    <div className="ProductCard group border-[1px] px-2 py-4 flex flex-col justify-between bg-amber-50">
      <div
        className="w-full cursor-pointer overflow-hidden relative"
        onClick={handleDetails}
      >
        <img
          src={products.image}
          alt="productImage"
          className="w-full object-cover group-hover:scale-110 duration-500"
        />
        <div className="">
          {products.rating.count <= 100 && (
            <p className=" bg-amber-800 text-white p-2 m-2 text-center">
              Out of Stock
            </p>
          )}
        </div>
      </div>
      <div className="w-full">
        <div className="flex align-bottom">
          <p className="font-titleFont text-base font-bold pb-4">
            {products.title}
          </p>
        </div>
        <div className="flex flex-col align-bottom relative overflow-hidden text-sm">
          <div className="transform group-hover:translate-x-24 transition-transform duration-500">
            <p>price: ${products.price}</p>
            <p>rating: {products.rating.rate}</p>
          </div>
          {products.rating.count > 100 && (
            <button
              className="absolute z-20 w-[100px] text-amber-900 hover:text-amber-500 flex flex-col items-center gap-2 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
              onClick={() => dispatch(addToCart({
                id: products.id,
                title: products.title,
                price: products.price,
                description: products.description,
                category: products.category,
                image: products.image,
                rate: products.rating.rate,
                count: products.rating.count,
                quantity: 1,
              })) & toast.success(`${products.title} is added`)} >
              <p>Add to Cart</p>
              <MdAddShoppingCart />
            </button>
          )}
          <div className="pt-4 m-1 text-lg text-amber-900">
            {products.category}
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
    </div>
  );
};

export default ProductCard;
