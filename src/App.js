import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import {productsData} from "./api/Api";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";


const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
