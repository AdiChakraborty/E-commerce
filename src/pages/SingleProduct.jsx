import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const params = useParams()
    const [singleProduct,setSingleProduct] = useState("")
    console.log(params);

    const getSingleProduct = async () =>{
        try {
            const res = await axios.get(`https://api.escuelajs.co/api/v1/products/${params.id}`) 
           console.log(res);
           
            const product = res.data;
            setSingleProduct(product)
            console.log(product);
            
        } catch (error) {
            console.log("Error");
            
        }
    }

    useEffect(()=>{
        getSingleProduct()
    },[])
    
  return (
    <div>
      SingleProduct
    </div>
  )
}

export default SingleProduct
