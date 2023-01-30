import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useGlobalContext } from "../../context/Context";
import { single_product_url as url } from "../../data/Contant";
import axios from 'axios'

const ProductDetails = () => {
  // const { fetchSingleProducts, single_product } = useGlobalContext();
  const [state, setState] = useState({})
  const { id } = useParams();
  // console.log(url + id);
  const navigate = useNavigate()
  
  useEffect(() => {
    getdata()
  }, []);

  const getdata = async()=>{
    try {
      const response = await axios.get(url + id);
      const single_product = response.data;
      console.log(single_product)
  setState(single_product)
    } catch (e) {
   console.log(e.error)
    }
  }
  
  // console.log(single_product);

  return (
    <div>
      <button onClick={()=>{navigate(-1)}}>Back</button>
      <div>
        {/* <img src={state.images[0].url} alt="" /> */}
        <h5>{state.name}</h5>
        <div>
          {state.images.map((item)=>(<img src={item.url} alt="img" />))}
        </div>
        {/* <img src={details.image} alt="" /> */}
      </div>
    </div>
  );
};

export default ProductDetails;
