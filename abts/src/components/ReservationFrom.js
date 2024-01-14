import React, { useState } from 'react'
import "./ReservationForm.css"
import {setpassanger} from "../store/Actions";
import { useDispatch, useSelector } from 'react-redux';
function ReservationFrom() {
    const[Pname ,SetPname]=useState("");
    const[Pnumber,SetPnumber]=useState("");
    const[Ppickup,SetPickup]=useState("");

 
    const dispatch= useDispatch();
    const handlesubmit=(e)=>{
    e.preventDefault();
    dispatch(setpassanger({
        name:Pname,
        phonenumber:Pnumber,
        pickup:Ppickup
    }))
    
    }
    const onNamechange=(e)=>
    {
            SetPname(e.target.value);
    }
    const onPnumberchange =(e)=>{
        SetPnumber(e.target.value);
    }
    const onPpickupchange =(e)=>{
        SetPickup(e.target.value); 
    }
  return (
    <div className=' form_contianer  rounded p-2'>
        <form className='' onSubmit={handlesubmit}>
            <div className='mb-2 p-1'>
                <lable> Passenger Name:</lable>
                <input type="text" value={Pname} required onChange={onNamechange} className='reservation_form_inputs' placeholder='Passenger name'/>
            </div>
            <div className='mt-1 p-1'>
            <lable> Passenger Phonenumber:</lable>
                <input type="phonenumber" value={Pnumber} required onChange={onPnumberchange} className='reservation_form_inputs' placeholder='+251'/>
            </div>
            <div className='mt-1 mb-3 p-1'>
            <lable> pick up:</lable>
                <input type="text" value={Ppickup} required onChange={onPpickupchange} className='reservation_form_inputs' placeholder='Location'/>
            </div>
            <button className='book_button' type="submit" >Book</button>
        </form>

    </div>
  )
}

export default ReservationFrom