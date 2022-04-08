import React from 'react'
import "./productList.css";
import { products } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function ProductList() {

    const [data , setData] = useState(products);


    const deleteHandler = () => {
        setData(data.filter((el) => el.id !==el.id ));
      };
      
      

  return (
    <div className='productList'> 
    
<div
  className="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">

  <div>
    <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
      <i class="fas fa-th-large mt-0"></i>
    </button>
    <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
      <i class="fas fa-columns mt-0"></i>
    </button>
  </div>

 

  <div>
    <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
      <i class="fas fa-pencil-alt mt-0"></i>
    </button>
    <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
      <i class="far fa-trash-alt mt-0"></i>
    </button>
    <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
      <i class="fas fa-info-circle mt-0"></i>
    </button>
  </div>

</div>


<div className="px-4">

  <div className="table-wrapper">
   
    <table className="table table-hover mb-0">

      <thead>
        <tr>
          <th>
            <input className="form-check-input" type="checkbox" id="checkbox"/>
            <label class="form-check-label" for="checkbox" className="mr-2 label-table"></label>
          </th>
          <th className="th-lg">
            <a>ID
              <i class="fas fa-sort ml-1"></i>
            </a>
          </th>
          <th className="th-lg">
            <a href="">Product
              <i class="fas fa-sort ml-1"></i>
            </a>
          </th>
          {/* <th className="th-lg">
            <a href="">img
              <i class="fas fa-sort ml-1"></i>
            </a>
          </th> */}
          <th className="th-lg">
            <a href="">Stock
              <i class="fas fa-sort ml-1"></i>
            </a>
          </th>
          <th className="th-lg">
            <a href="">Status
              <i class="fas fa-sort ml-1"></i>
            </a>
          </th>
          <th className="th-lg">
            <a href="">Price
              <i class="fas fa-sort ml-1"></i>
            </a>
          </th>
          <th className="th-lg">
            <a href="">Action
              <i class="fas fa-sort ml-1"></i>
            </a>
          </th>
        </tr>
      </thead>
      <tbody>

      {products.map((item, index)=>{
        return(

          <tr>        
          <th scope="row">
            <input className="form-check-input" type="checkbox" id="checkbox1"/>
            <label class="form-check-label" for="checkbox1" className="label-table"></label>
          </th>
          <th scope="row">{index+1}</th>
              <td key={index}>
              {item.img}{item.name}
            </td>
          {/* <td>{item.user}</td> */}
          <td>{item.Stock}</td>
          <td>{item.Status}</td>
          <td>{item.Price}</td>
          <td>
            <Link to="/user/:id"><button className="userListEdit">Edit</button></Link>
          {/* <button  className="userListDelete" class="bi bi-trash" onClick={(id) => setData(data.filter((item)=> item.id !== id))}>delete</button></td> */}
          {/* <button  className="userListDelete" class="bi bi-trash" onClick={handleRemoveItem}>delete</button></td> */}
          {/* <button  className="userListDelete" class="bi bi-trash" onClick={deleteHandler}>delete</button></td> */}
  <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button></td>
        </tr>
         )})}  
     </tbody>
      
        

    </table>
        
  </div>
  {/* <Pagination
        postsPerPage={postsPerPage}
        totalPosts={userTable.length}
        paginate={paginate}
      /> */}

 </div>

    </div>
  )
}
