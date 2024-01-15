import React, { useState } from 'react'
import './Loginpage.css'
import api from '../Apis/api';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { set_user } from '../store/Actions';
import { useDispatch, useSelector } from 'react-redux';
function Loginpage() {
  const [username,setusername]=useState("");
  const [password,setpassword]=useState("");
  const navigate= useNavigate();
  const dispatch= useDispatch();
  const handelsubmit=async(e)=>
  {
    e.preventDefault();
    try {
      const response= await api.post("/Login",{
        username:username,
        password:password
      })
        if(response.data.result===1)
        {
          dispatch(set_user(response.data.data.user));
          navigate("/Home");
        }
        else{
           alert("Incorrect password or Username");
        }
      
    } catch (error) {
      
    }
    
  }
  return (
    <div>
        <div className='container contianer_height  rounded'>
            <div className='row h-100 pt-2'>
               
                <div className='col-sm-10 col-lg-5 mx-auto  mt-2 rounded bg-white'>
                    <div className='top_image_container' >
                        <div className='img_container'>
                            <img src='../Assets/Logo.png' className='logo' alt=''/> 
                        <div className='welcome_title'>
                            <h6 > Welcome Back !</h6>
                            <h4 >Please enter your details</h4>
                        </div>
                      </div>
                        
                    </div>

                    <div>
                    <form   className='form_container' onSubmit={handelsubmit}>
                        <div className="mb-4 mt-3">
                          <input type="username" required className="inputs" value={username} onChange={(e)=>{setusername(e.target.value)}} id="email" placeholder="Username" name="email"/>
                        </div>
                        <div className="mb-4">
                         
                          <input type="password" required className="inputs" value={password} onChange={(e)=>{setpassword(e.target.value)}}  id="pwd" placeholder="Password" name="pswd"/>
                        </div>
                        <div className="form-check check_container px-3  mb-3">
                          <label className="check_input_lable ">
                            <input className="form-check-input check_input " required type="checkbox" name="remember"/> Remember me for 30 days
                          </label>
                          <div>
                            <span> Forgot password ?</span>
                          </div>
                        </div>
                        <button type="submit" className=" Login_btn" >Log in</button>
                  </form>
                    

                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default Loginpage