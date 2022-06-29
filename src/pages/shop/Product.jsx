import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product=()=>{

    useEffect(()=>{
        fetchData()
    },[])

    const urlParam =useParams();
      const fetchData=()=>{
        fetch(`https://fakestoreapi.com/products/${urlParam.id}`)
        .then(res=>res.json())
        .then(json=>setproduct(json))

           }

           const [Product ,setproduct]=useState({})
    
    return(
    <div>
        <h3 className="text-center m-5">List item</h3>
        <div className="card my-5  m-auto" style={{width: 18+'rem'}}>
        <img src={Product.image}  className="w-50  m-auto" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{Product.title}</h5>
          <p className="card-text">{Product.description}</p>
          <p className="card-text">{Product.price}</p>
        </div>
      </div>
      </div>
    )
    
    }
    export default Product;