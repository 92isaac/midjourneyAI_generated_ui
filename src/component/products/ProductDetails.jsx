import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/Context";
import { single_product_url as url } from "../../data/Contant";
import Error from "../../data/Error";
import Spinner from "../../data/Spinner";
import Navb from "../navbar/Navb";

const ProductDetails = () => {
  const { fetchSingleProducts, single_product, single_product_error, loading } =
    useGlobalContext();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleProducts(url + id);
  }, [id]);


  return (
    <div className="">
      <Navb />
      {loading ? <Spinner /> : <div className="grid grid-cols-2  md:flex-row p-6">
      <div className="w-full md:w-full">
        <div className="relative">
          <img src={single_product.images[0].url} alt={single_product.name} className="w-full h-64 object-cover rounded-lg" />
          <button className="absolute bottom-0 right-0 m-6 bg-white p-2 rounded-full">
            <svg
              className="w-6 h-6 text-teal-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M16.5 3a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-3 0v-11A1.5 1.5 0 0 1 16.5 3zm0 5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-3 0v-6a1.5 1.5 0 0 1 1.5-1.5zm-8-5A1.5 1.5 0 0 1 8.5 3v11a1.5 1.5 0 0 1-3 0V3a1.5 1.5 0 0 1 1.5-1.5zm0 5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-3 0v-6a1.5 1.5 0 0 1 1.5-1.5z" />
            </svg>
          </button>
        </div>
        <div className="mt-6 w-full">
          {single_product.images.map((img, i) => (
            <img
              key={i}
              src={img.url}
              alt={single_product.name}
              className="w-2/12 mx-1 inline-flex object-cover aspect-square border-4 border-zinc-900 rounded cursor-pointer hover:shadow-md"
            />
          ))}
        </div>
      </div>
      <div className="md:ml-6">
        <h2 className="text-xl font-bold mb-2">{single_product.name}</h2>
        <p className="text-gray-700 mb-4">{single_product.description}</p>
        <div className="flex items-center">
          <p className="text-teal-500 font-bold mr-2">$ {single_product.price}</p>
          <p className="text-gray-600">/ per item</p>
        </div>
        <button className="bg-teal-500 text-white py-2 px-4 mt-4 rounded hover:bg-teal-600">
          Add to Cart
        </button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
        
        </div>}
      {single_product_error ? <Error message="Something went wrong" /> : null}
    </div>
  );
};

export default ProductDetails;
