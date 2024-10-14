import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import '../css/Cart.css'
const Cart = () => {
  // const [api_product, setApi_product] = useState([]);
  const [api_cart, setApi_cart] = useState([]);
  const [total] = useState(0)
  // const [quantity,setQuantity] = useState(1)
  const cartUrl="http://localhost:3000/carts";
  const navigate = useNavigate();
  // const viewCart=(id)=>{
  //   return (`${cartUrl}?userid=${id}&_embed=product`)
  // }
  // useEffect(() =>{

  // },[api_cart])
  

  const handleAddQuant = (p)=>{
    if(p.quantity<99){
      p.quantity=p.quantity+1;
      let data= p;
      fetch(`${cartUrl}/${p.id}`,{
        method:'PUT',
        body:JSON.stringify(data)
      }).then(res=>res.json())
        .then(data1=>console.log(data1))
        // .catch((err)=>console.log(err))
    }
    else{
      //dont sub
      // alert("please use remove button")
    }
  }
  // const ViewCart=( pid)=>{
  //   return fetch(`${cartUrl}?userid=1av3&productId=${pid}`)[0]
  // }
  const handleRemoveItem = (p) =>{
    fetch(`${cartUrl}/${p.id}`,{
      method:'DELETE'
    }).then(res=>res.json())
      .then(data=>console.log(data))
    
      document.getElementById(`ATC${p.id}`).disabled = false
  }


  
  const handleSubQuant = (p)=>{
    if(p.quantity>1){
      p.quantity=p.quantity-1;
      let data= p;
      fetch(`${cartUrl}/${p.id}`,{
        method:'PUT',
        body:JSON.stringify(data)
      }).then(res=>res.json())
        .then(data1=>console.log(data1))
        // .catch((err)=>console.log(err))
    }
    else{
      //dont sub
      alert("please use remove button")
    }
  }
  
  const fetching=()=>{
    fetch(`${cartUrl}?userid=${localStorage.getItem("id")}&_embed=product`)
      .then(res=>res.json())
      .then(data=>setApi_cart(data))
  }

  useEffect(()=>{
   
        fetching();
    
  },[])

 
  return (
    <div>
    <div className="container" id="cartdiv">
    <h2 className="text-center pt-3">Your Cart</h2>
      <div className="d-flex mx-3">
      
      <table className="table">
        <thead>
          <tr className="">
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody >
      
              {api_cart.map((p)=>(
                <tr key={p.id}>

                <td>
                   <div className="d-flex m-0">
                     <div>
                      <img
                        src={p.product.image}
                        style={{ width: "60px", height: "60px" }}
                        alt="productImage"
                      />
                    </div>
                    <div className="d-flex flex-column px-2">
                      <h6>{p.product.category}</h6>
                      <h4>{p.product.title}</h4>
                    </div>
                  </div>
                </td>
                <td>${p.product.price}</td>
  
                <td className="text-center"><FaMinus className="mx-1" style={{"cursor":"pointer"}} onClick={()=>handleSubQuant(p)}/> {p.quantity} <FaPlus className="mx-1" style={{"cursor":"pointer"}} onClick={()=>handleAddQuant(p)}/></td>
  
  
                <td>{p.product.price * p.quantity}</td>
                {console.log("inside")}
                {/* {setTotal(total + (p.product.price * p.quantity))} */}
                <td className="text-center fs-4 text-danger "><MdDelete onClick={() =>handleRemoveItem(p)} style={{cursor:"pointer"}} /></td>
                {/* { setTotal(total + (p.product.price * p.quantity))} */}
              </tr>
                
                
              ))}
            

             
          
        </tbody>

       
        
       
      </table>

      <div className="w-50 mx-4 border p-3 border-black h-25 mt-4">
        <h4 className="text-center">ORDER SUMMARY</h4>
        <div className="d-flex justify-content-between mt-4">
          <p>Subtotal</p>
          <p><b>  ₹ {total}</b></p>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <p>Delivery Charges</p>
          <p> ₹ 100</p>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <p>GST</p>
          <p> ₹ 180</p>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <p><b>Total</b></p>
          <p><b> ₹ 0</b></p>
        </div>
        <button className="btn w-100 bg-info" onClick={() => {
        navigate("/checkout");
        }}>CHECKOUT ORDER</button>
      </div>
      </div>

      </div>
    </div>

  );
};

export default Cart;
