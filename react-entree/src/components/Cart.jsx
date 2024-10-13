import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { MdDelete } from "react-icons/md";
// import { FaPlus } from "react-icons/fa6";
// import { FaMinus } from "react-icons/fa6";
const Cart = () => {
  const [api_product, setApi_product] = useState([]);
  const [api_cart, setApi_cart] = useState([]);
  const [quantity,setQuantity] = useState(1)
  // const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setApi_product(data));
    fetch("http://localhost:3000/cart/1")
      .then((res) => res.json())
      .then((data) => setApi_cart(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center">Your Cart</h2>
      <div className="d-flex">
      
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
          {api_product.map((e) => (
            <tr>
              <td>
                <div className="d-flex m-0">
                  <div>
                    <img
                      src={e.image}
                      style={{ width: "60px", height: "60px" }}
                    />
                  </div>
                  <div className="d-flex flex-column px-2">
                    <h6>{e.category}</h6>
                    <h4>{e.title}</h4>
                  </div>
                </div>
              </td>
              <td>$ {e.price}</td>

              {/* <td className="text-center"><FaMinus className="mx-1" /> {quantity} <FaPlus className="mx-1" /></td> */}


              <td>{e.price * e.quantity}</td>
              {/* <td className="text-center fs-4 text-danger "><MdDelete /></td> */}
            </tr>
          ))}
        </tbody>

       
        <button className="btn border mt-3 bg-warning ">Clear All</button>
       
      </table>

      <div className="w-50 mx-4 border p-3 border-black h-25 mt-4">
        <h4 className="text-center">ORDER SUMMARY</h4>
        <div className="d-flex justify-content-between mt-4">
          <p>Subtotal</p>
          <p><b>  $ 000</b></p>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <p>Estiamted Shopping</p>
          <p> $ 000</p>
        </div>
        <div className="d-flex justify-content-between mt-2">
          <p>Shopping Discount</p>
          <p> $ 000</p>
        </div>

        <div className="d-flex justify-content-between mt-2">
          <p><b>Subtotal</b></p>
          <p><b> $ 000</b></p>
        </div>
        <button className="btn w-100 bg-info" onClick={() => {
        // navigate("/checkout");
        }}>CHECKOUT ORDER</button>
      </div>
      </div>

      
    </div>
  );
};

export default Cart;
