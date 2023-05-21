import React, { useState, useEffect } from 'react';
import Carousel from "../components/Carousel";
import Products from '../components/Products';
import { useLoaderData } from 'react-router-dom';


const Home = () => {

  const fakeApiData = useLoaderData();
  // console.log(fakeApiData.data);

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(fakeApiData.data)
  },[fakeApiData]);


  return (
    <div className='Home'>
      <div>
        <Carousel/>
        <Products  products={products}/>
      </div>
    </div>
  )
}

export default Home


