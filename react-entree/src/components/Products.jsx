import React from 'react'
import '../css/Products.css'
import bookmark from '../images/bookmark.svg'
//import Filter from './Filter'

function Products({products, onATC, onATL}) {
  return (
    <div>
        <div className="container" id="allproducts">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4">
        {/* <h2 className="text">Products</h2> */}
        
            <div className="card1">
                {products.map((product, index)=>{
                    return(
                            <div className="card mt-3 shadow" key={index}>
                                <img src={product.image} className="card-img-top img-fit p-2" alt={product.title}/>
                                <div className="card-body">
                                    <span className="badge bg-success ">In Stock</span>
                                    <div className="">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text fs-6">₹{product.price} M.R.P. <del>₹{product.price+100}</del></p>
                                    </div>
                                    <p className="card-text fs-6 text-justify p_des">{product.description}</p>
                                    <div className="d-flex justify-content-between mt-2">
                                        <button className="btn btn-outline-secondary" id={`ATL${product.id}`}>
                                            <img src={bookmark} alt="icon" width="35" height="30" className="" onClick={(e)=>onATL(product.id)}/>
                                        </button>
                                        <button id={`ATC${product.id}`} type="button" className="btn btn_add px-4" onClick={(e)=>onATC(product.id)} >Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                    )
                })}
                        </div>

            </div>
        </div>
    </div>
  )
}

export default Products
