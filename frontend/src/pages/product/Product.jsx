import React from 'react'
import { Link } from 'react-router-dom'
import "./product.css";
import Chart from '../../components/chart/Chart';
import { productData } from '../../dummyData';

export default function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="producttitle">Product</h1>
                <Link to="/newProduct">
                    <button className='productAddButton'>Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance" />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.unsplash.com/photo-1514826786317-59744fe2a548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className='productInfoImg' />
                        <span className="productName">Apple Laptop</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">1234</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock: </span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label >Product Name</label>
                        <input type="text" placeholder='Apple Laptop' />
                        <label>In Stock</label>
                        <select name='inStock' id='idStock'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                        </select>
                        <label>Active</label>
                        <select name='active' id='active'>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>

                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.unsplash.com/photo-1514826786317-59744fe2a548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFjYm9vayUyMHByb3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="" className='productUploadImg'/>
                            <label for="file">
                            <i class="bi bi-arrow-up-circle"></i>
                            </label>
                            <input type="file"  id='file' style={{display:"none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>

            </div>
        </div>
    )
}
