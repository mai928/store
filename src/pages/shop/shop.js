import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const Shop=()=>{

    useEffect(()=>{
        fetchProduct()
    },[])

    const fetchProduct=()=>{
 fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setproducts(json))

    }

    const [products, setproducts] = useState([]);

   

    return(

        <div className="container ">
          <h1 className="text-center py-5">Store</h1>
          <div className=" row ">

        {
         products.map((item ,i) => {
          const {image ,title} =item
            return(
              
              <Link className="col-4    "  to={`/Product/${item.id}`} key={i}>
                <div className="border">
              <img className="w-50 py-5 m-auto d-block"  src={item.image}/>
              <p>{item.title}</p> 
              <p>{item.description}</p> 
              <p>{item.price}$</p> 
              </div>
               </Link>
             
            )

          
        }) }

         </div>
        </div>
    )
}


export  default Shop