import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import '../css/Wishlist.css'

const Wishlist = () => {
  const [api_list, setApi_list] = useState([]);
  const listUrl="http://localhost:3000/lists";
  const navigate = useNavigate();

  const handleRemoveItem = (p) =>{
    fetch(`${listUrl}/${p.id}`,{
      method:'DELETE'
    }).then(res=>res.json())
      .then(data=>console.log(data))
    //   document.getElementById(`ATL${p.id}`).disabled = false
  }

  const fetching=()=>{
    fetch(`${listUrl}?userid=${localStorage.getItem("id")}&_embed=product`)
      .then(res=>res.json())
      .then(data=>setApi_list(data))
  }

  useEffect(()=>{
    fetching();
  },[])


  return (
    <div>
    <div className="container" id="cartdiv">
    <h2 className="text-center pt-3">Your Favourites</h2>
      <div className="d-flex mx-3">
      
      <table className="table">
        <thead>
          <tr className="">
            <th>Item</th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody >
      
              {api_list.map((p)=>(
                <tr key={p.id}>

                <td>
                   <div className="d-flex m-0">
                     <div>
                      <img
                        src={p.product.image}
                        style={{ width: "60px", height: "60px" }}
                      />
                    </div>
                    <div className="d-flex flex-column px-2">
                      <h6>{p.product.category}</h6>
                      <h4 className="ptitle">{p.product.title}</h4>
                    </div>
                  </div>
                </td>
                <td>${p.product.price}</td>
                <td className="text-center fs-4 text-danger "><MdDelete onClick={() =>handleRemoveItem(p)} style={{cursor:"pointer"}} /></td>
              </tr> 
              ))}
        </tbody>
      </table>
      </div>
      </div>
    </div>

  );
};

export default Wishlist;