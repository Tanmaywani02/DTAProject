import React from 'react'
import '../css/Products.css'
import bookmark from '../images/bookmark.svg'
import Filter from './Filter'

function Products({products}) {
  return (
    <div>
        <div class="container" id="allproducts">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-4">
        {/* <h2 class="text">Products</h2> */}
        
            <div class="card1">
                {products.map((product, index)=>{
                    return(
                            <div class="card mt-3 shadow">
                                <img src={product.image} class="card-img-top img-fit p-2" alt={product.title}/>
                                <div class="card-body">
                                    <span class="badge bg-success ">In Stock</span>
                                    <div class="">
                                        <h5 class="card-title">{product.title}</h5>
                                        <p class="card-text fs-6">₹{product.price} M.R.P. <del>₹{product.price+100}</del></p>
                                    </div>
                                    <p class="card-text fs-6 text-justify p_des">{product.description}</p>
                                    <div class="d-flex justify-content-between mt-2">
                                        <a class="btn btn-outline-secondary">
                                            <img src={bookmark} alt="icon" width="35" height="30" class=""/>
                                        </a>
                                        <button type="button" class="btn btn_add px-4" >Add to Cart</button>
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
