import React from 'react'
import '../css/Filter.css'

function Filter({onSelectCat}) {
  return (
    <div className='container filterdiv'>
        <div className='title'>
         <h2>Products</h2>
        </div>
        <div className='filter'>
            <h6 style={{marginTop:'5px'}}>Category</h6>
            <select id='category' name='category' onChange={(e)=>onSelectCat()}>
                <option value="all">All</option>
                <option value="Pizza">Pizza</option>
                <option value="Pasta">Pasta</option>
                <option value="Appetizer">Appetizer</option>
                <option value="Salad">Salad</option>
                <option value="Soup">Soup</option>
                <option value="Chicken">Chicken</option>
                <option value="Dessert">Dessert</option>
            </select>
        </div>
    </div>
  )
}

export default Filter
