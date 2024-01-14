import React from 'react'
import './Loginpage.css'
import { Link } from 'react-router-dom'
function Loginpage() {
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
                    <form   className='form_container'>
                        <div className="mb-4 mt-3">
                          <input type="email" required className="inputs" id="email" placeholder="Email" name="email"/>
                        </div>
                        <div className="mb-4">
                         
                          <input type="password" required className="inputs" id="pwd" placeholder="Password" name="pswd"/>
                        </div>
                        <div className="form-check check_container px-3  mb-3">
                          <label className="check_input_lable ">
                            <input className="form-check-input check_input " type="checkbox" name="remember"/> Remember me for 30 days
                          </label>
                          <div>
                            <span> Forgot password ?</span>
                          </div>
                        </div>
                       <Link to="/Home"> <button type="submit" className=" Login_btn">Log in</button></Link> 
                  </form>
                    

                    </div>
                    
                </div>

            </div>
        </div>
    </div>
  )
}

export default Loginpage