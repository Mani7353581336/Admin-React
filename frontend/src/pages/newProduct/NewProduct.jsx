import React from 'react'
import "./newProduct.css"

export default function NewProduct() {
    return (
        <div className='newProduct'>
            <form className="newProductForm">
               
                <div className="productFormSingle">
                <h1>New Product</h1>
                <label>Image</label>
                <div>
                   
                <button >Choose File</button>No file chosen
                </div>
                    <label > Name</label>
                    <input type="text" placeholder='Apple Laptop' />
                    <label>In Stock</label>
                 <input type="text" placeholder='1234'/>
                    <label>Active</label>
                    <select name='active' id='active'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>

                    </select>
                    <button className="userAdminButton">Create</button>
                </div>
                </form >
        </div>
    
  )
}
