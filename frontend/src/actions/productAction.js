import axios from "axios";
import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    // ADMIN_PRODUCT_REQUEST,
    // ADMIN_PRODUCT_SUCCESS,
    // ADMIN_PRODUCT_FAIL,
    // NEW_PRODUCT_REQUEST,
    // NEW_PRODUCT_SUCCESS,
    // NEW_PRODUCT_FAIL,
    // UPDATE_PRODUCT_REQUEST,
    // UPDATE_PRODUCT_SUCCESS,
    // UPDATE_PRODUCT_FAIL,
    // DELETE_PRODUCT_REQUEST,
    // DELETE_PRODUCT_SUCCESS,
    // DELETE_PRODUCT_FAIL,
    // PRODUCT_DETAILS_REQUEST,
    // PRODUCT_DETAILS_FAIL,
    // PRODUCT_DETAILS_SUCCESS,
    // NEW_REVIEW_REQUEST,
    // NEW_REVIEW_SUCCESS,
    // NEW_REVIEW_FAIL,
    // ALL_REVIEW_REQUEST,
    // ALL_REVIEW_SUCCESS,
    // ALL_REVIEW_FAIL,
    // DELETE_REVIEW_REQUEST,
    // DELETE_REVIEW_SUCCESS,
    // DELETE_REVIEW_FAIL,
    CLEAR_ERRORS,
  } from "../constants/productConstants";

  export const getProduct = ()=>async(dispatch)=>{
    try{
        dispatch({
            type:ALL_PRODUCT_REQUEST
        });
        const data= await axios.get("/api/products");
        dispatch({
            type:ALL_PRODUCT_SUCCESS,
            payload:data
        })
    }
    catch(error){
            dispatch({
                type : ALL_PRODUCT_FAIL,
                payload: error.response.data.message,
            });
            console.log(error);
    }
  };

  export const clearError = ()=>async(dispatch)=>{
    dispatch({type:CLEAR_ERRORS})
  };