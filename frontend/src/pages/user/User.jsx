import React from 'react'
import "./user.css"
import { Link } from 'react-router-dom'

export default function User() {
    return (

        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userAdminButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://celebritybiobook.com/wp-content/uploads/2022/02/Radhika-Pandit-7.jpg" alt="" className="userShowImage" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Radhe</span>
                            <span className="userShowTitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Accounnt Details</span>
                        <div className="userShowInfo">
                            <i className='userShowIcon' class="bi bi-person"></i>
                            <span className="userShowInfoTitle">Radhe143</span>
                        </div>

                        <div className="userShowInfo">
                            <i className='userShowIcon' class="bi bi-calendar"></i>
                            <span className="userShowInfoTitle">10.12.1997</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <i className='userShowIcon' class="bi bi-phone"></i>
                            <span className="userShowInfoTitle">+1 123 456 67</span>
                        </div>
                        <div className="userShowInfo">
                            <i className='userShowIcon' class="bi bi-envelope"></i>
                            <span className="userShowInfoTitle">Radhe143@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <i className='userShowIcon' class="bi bi-geo">Banglore India</i>
                            <span className="userShowInfoTitle"></span>
                        </div>
                    </div>
                </div>

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder='Radhe143'
                                    className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder='Radha Man'
                                    className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder='Radhe143@gmail.com'
                                    className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone Number</label>
                                <input type="text" placeholder='+1 123 456 67'
                                    className='userUpdateInput' />
                            </div>
                            <div className="userUpdateItem">
                                <label>Adress</label>
                                <input type="text" placeholder='Banglore India'
                                    className='userUpdateInput' />
                            </div>

                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateRight">
                                <div className="userUpdateUpload">
                                    <img src="https://celebritybiobook.com/wp-content/uploads/2022/02/Radhika-Pandit-7.jpg" alt="" className="userUpdateImg" />

                                    <label htmlFor='file'><i className='userUpdateIcon' class="bi bi-arrow-up-circle"></i></label>
                                    <input type="file" id='file' style={{ display: "none" }} />
                                </div><br/><br/><br/><br/>

                                <button className="userUpdateButton">Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
