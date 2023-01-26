import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGlobalContext } from '../../context/Context'
import { single_product_url as url  } from '../../data/Contant'


const ProductDetails = () => {
    const {    single_product_loading: loading,
      single_product_error: error,
      single_product: product,
      fetchSingleProducts,} = useGlobalContext()
    const {id} =useParams()

    const navigate = useNavigate()
    // const details = products[id]
console.log(product)
// console.log(singleProduct)

// const {
//   name,
//   price,
//   description,
//   stock,
//   stars,
//   reviews,
//   id: sku,
//   company,
//   images,
// } = product;



    useEffect(() => {
      fetchSingleProducts(url + id);
    }, [id]);
  
    // useEffect(() => {
    //   if (error) {
    //     setTimeout(() => {
    //       navigate('/');
    //     }, 3000);
    //   }
    // });
  return (
    <div>
        <div>
            {/* <img src={single_product.image} alt="" /> */}
            <h5>{product.name}</h5>
            {/* <img src={details.image} alt="" /> */}
        </div>
    </div>
  )
}

export default ProductDetails