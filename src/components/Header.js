import React from "react";
import { SlHandbag } from "react-icons/sl";
import { RiUserStarFill } from "react-icons/ri";
import { marketplace_1 } from "../assets";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigateToHome = useNavigate();
  const navigateToCart = useNavigate();

  const handleHome = () => {
    navigateToHome(`/`);
  };
  const handleCart = () => {
    navigateToCart(`/cart`);
  };

  const productData = useSelector((state) => state.pazar.productData);
  // console.log(productData);
  const userInfo = useSelector((state) => state.pazar.userInfo);

  return (
    <div className="Header w-full h-20 bg-amber-50 border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="flex max-w-screen-xl h-full ml-8 items-center justify-between">
        <div className="cursor-pointer" onClick={handleHome}>
          <img
            src={marketplace_1}
            alt="main-logo"
            className="w-8 h-8 rounded-full mr-2 inline"
          />
          <span className="text-black-700 text-2xl font-titleFont">
            Pazar Ecommerce
          </span>
        </div>
        <div className="right-menus">
          <div className="flex">
            <ul className="flex items-center gap-8 font-titleFont font-medium">
              <li
                className="text-base text-black font-bold hover:text-amber-900 hover:under
                            underline-offset-2 decoration-[1px] cursor-pointer"
                onClick={handleHome}
              >
                Home
              </li>
              <li
                className="text-base text-black font-bold hover:text-amber-900 hover:under
                            underline-offset-2 decoration-[1px] cursor-pointer"
              >
                Pages
              </li>
              <li
                className="text-base text-black font-bold hover:text-amber-900 hover:under
                            underline-offset-2 decoration-[1px] cursor-pointer"
              >
                Shop
              </li>
              <li
                className="text-base text-black font-bold hover:text-amber-900 hover:under
                            underline-offset-2 decoration-[1px] cursor-pointer"
              >
                Element
              </li>
              <li
                className="text-base text-black font-bold hover:text-amber-900 hover:under
                            underline-offset-2 decoration-[1px] cursor-pointer"
              >
                Blog
              </li>
            </ul>
            <div className="relative cursor-pointer" onClick={handleCart}>
              <SlHandbag className="w-8 h-8 ml-8" />
              <span className="absolute w-6 top-3 left-9 text-sm flex items-center justify-center font-semibold font-bodyFont text-ora">
                {productData.length}
              </span>
            </div>
            <Link to="/login">
              {userInfo ? (
                <img
                  className="w-6 h-6 mx-8"
                  src={userInfo.image}
                  alt="userImage"
                />
              ) : (
                <RiUserStarFill className="w-6 h-6 mx-8" />
              )}
            </Link>
            {userInfo && <p>{userInfo.name}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
