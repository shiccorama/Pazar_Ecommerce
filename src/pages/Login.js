import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {addUser, removeUser} from "../redux/pazarSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(addUser({
          id: user.uid,
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
        }));
        setTimeout(() => {
            navigate("/")
        }, 1500)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out Successfully!");
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="Login flex flex-col gap-10 m-20 items-center justify-center">
      <div
        className="flex border-2 border-amber-500 p-4 gap-6 items-center cursor-pointer hover:border-amber-900 bg-amber-50 hover:bg-amber-500 text-amber-900 hover:text-amber-50"
        onClick={handleGoogle}
      >
        <BsGoogle />
        <span> Sign In with Google </span>
      </div>
      <button
        onClick={handleSignOut}
        className="bg-amber-900 text-amber-50 text-base py-3 px-8 tracking-wide rounded-md hover:bg-amber-500 duration-300"
      >
        Sign Out
      </button>
      <div className="flex border-2 border-amber-500 p-4 gap-6 items-center cursor-pointer hover:border-amber-900 bg-amber-50 hover:bg-amber-500 text-amber-900 hover:text-amber-50">
        <BsGithub />
        <span> Sign In with Github </span>
      </div>
      <button className="bg-amber-900 text-amber-50 text-base py-3 px-8 tracking-wide rounded-md hover:bg-amber-500 duration-300">
        Sign Out
      </button>
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
  );
};

export default Login;
