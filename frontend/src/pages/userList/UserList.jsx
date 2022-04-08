
import "./userlist.css";
import userTable from "../../dummyData";

import React, {  useEffect, useState } from 'react'
import { Link } from "react-router-dom";
// import Pagination from './Pagination'

export default function UserList(todo, ) {

  const [data , setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(6);

  // get current posts  for pagination
// const indexOfLastPost = currentPage * postsPerPage
// const indexOfFirstPost = indexOfLastPost - postsPerPage

// const currentPosts = userTable.slice(indexOfFirstPost , indexOfLastPost)

// // Change page
// const paginate = pageNumber => setCurrentPage(pageNumber);

//delete 
// const handleRemoveItem =(id)=>{

//   setData(data.filter((id)=> item.email!== id ));
  
// }
 

//  const deleteHandler = () => {
//   setData(data.filter((el) => el.id ==el.id ));
// };

// const removeItem = (index) => {
//   console.log(index);
//   setData(data.filter((o, i) => index !== i));
// };
const removeItem = (event) => {
  const name = event.target.getAttribute("name")
  setData(userTable.filter(item => item.id !==name));  
};
  return (
<div className="userList">




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
            <a href="">user
              <i class="fas fa-sort ml-1"></i>
            </a>
          </th>
          <th className="th-lg">
            <a href="">Email
              <i class="fas fa-sort ml-1"></i>
            </a>
          </th>
          <th className="th-lg">
            <a href="">Status
              <i class="fas fa-sort ml-1"></i>
            </a>
          </th>
          <th className="th-lg">
            <a href="">Transaction
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

      {userTable.map((item, idx)=>{
        return(
       
          <tr>       
          <th scope="row">
            <input className="form-check-input" type="checkbox" id="checkbox1"/>
            <label class="form-check-label" for="checkbox1" className="label-table"></label>
          </th>
          
          <th scope="row">{idx+1}</th>
          
              <td key={idx}>
            
               {item.user}
            </td>
           
          <td>{item.Email}</td>
          <td>{item.Status}</td>
          <td>{item.Transactions}</td>
          
            <Link to="/user/:id"><button className="userListEdit">Edit</button></Link>
           
            <span   onClick={() => removeItem(item.id,item.user,item.Email,item.Status,item.Transactions)} >    </span>
          
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
)}
