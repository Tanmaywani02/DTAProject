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
                <option value="Burger">Burger</option>
                <option value="Biryani">Biryani</option>
                <option value="Pasta">Pasta</option>
            </select>
        </div>
    </div>
  )
}

export default Filter
