import React, { Fragment, useEffect } from 'react'
import Product from "./Product"
import img from "../../images/air-jordan-miles-morales-as-spiderman_3840x2160_xtrafondos.com.jpg"
import "./Home.css"
import MetaData from "../layout/metaData";
import { getProduct } from '../../actions/productAction';
import {useSelector, useDispatch} from "react-redux"



const product ={
  name:"Shoose",
  images:[{url:img}],
  price:"₹5000",
  _id:"4567924"
 }
const Home = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProduct());

  },[dispatch])
  return (
    <Fragment>
      <MetaData title="ECOMMERCE"/>
       <div className='banner'>
       <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll 
              </button>
            </a>
       </div>
       <h2 className="homeHeading">Featured Products</h2>
       <div className="container" id="container">
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>
            <Product product={product}/>

       </div>

    </Fragment>
  )
}

export default Home