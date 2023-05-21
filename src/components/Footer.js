import React from "react";
import { marketplace_1, paymentLogo } from "../assets/index";
import {
  SiGithub,
  SiFacebook,
  SiTwitter,
  SiInstagram,
  SiPivotaltracker,
  SiHelpdesk,
} from "react-icons/si";
import { SlSocialYoutube } from "react-icons/sl";
import { MdShoppingCartCheckout } from "react-icons/md";
import { RiAccountPinBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  // const navigateToGithub = useNavigate();
  // const navigateToTwitter = useNavigate();

  // const handleGithub = () => {
  //   navigateToGithub(`https://github.com/shiccorama`);
  // };
  // const handleTwitter = () => {
  //   navigateToTwitter(`https://twitter.com/PythonatFawzy`);
  // };





  return (
    <div className="Footer">
      <div className="bg-black text-[#949494] py-20 font-titleFont grid grid-cols-4">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-2">
          <div className="main-logo">
            <img
              src={marketplace_1}
              alt="main-logo"
              className="w-8 h-8 rounded-full mx-2 inline"
            />
            <span className="text-black-700 text-2xl font-titleFont">
              Pazar Ecommerce
            </span>
          </div>
          <div className="text-gray text-lg tracking-wide py-2">
            <p className=" pl-1">
              @check my{" "}
              <a
                href="www.github.com/shiccorama"
                target="_blank"
                className="hover:text-white"
              >
                GitHub
              </a>{" "}
              page
            </p>
            <img src={paymentLogo} alt="payment-logos" className="w-56 py-3" />
          </div>
          <div className="text-gray text-sm tracking-wide p-2 flex flex-row gap-4 pl-2 ">
            <SiGithub className="text-lg hover:text-white duration-300 cursor-pointer"/>
            <SlSocialYoutube className="text-lg hover:text-white duration-300 cursor-pointer" />
            <SiFacebook className="text-lg hover:text-white duration-300 cursor-pointer" />
            <SiTwitter className="text-lg hover:text-white duration-300 cursor-pointer"/>
            <SiInstagram className="text-lg hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray mb-4"> locate us </h2>
          <div className="text-base flex flex-col gap-4">
            <p className="">Address: 33 Peace Street Off Main-Road</p>
            <p className="">Telephone: +20 22-44-66-88/+20 22-44-66-99</p>
            <p className="">Mobile: +20 1000 910 132/+20 1000 910 133</p>
            <p className="">Email: sheriff.rak.eg@gamil.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray mb-4"> Profile </h2>
          <div>
            <ul className="text-base flex flex-col gap-4">
              <li className="hover:text-white duration-300 cursor-pointer">
                <RiAccountPinBoxLine className="inline mr-2" />
                <span> My Account </span>
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                <MdShoppingCartCheckout className="inline mr-2" />
                <span> Checkout </span>
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                <SiPivotaltracker className="inline mr-2" />
                <span> Order Tracking </span>
              </li>
              <li className="hover:text-white duration-300 cursor-pointer">
                <SiHelpdesk className="inline mr-2" />
                <span> Help & Suppoer </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center mr-20">
          <input
            className="bg-transparent border px-4 py-2 text-sm text-gray-500"
            placeholder="email"
            type="text"
          />
          <button className="text-sm border text-gray border-t-0 hover:bg-white-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
