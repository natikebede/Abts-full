import React from 'react'
import TitleHeader from './TitleHeader';
import "./ReservationDetails.css";
import { PinDrop } from '@mui/icons-material';
import { CalendarMonth } from '@mui/icons-material';
import { PunchClockSharp } from '@mui/icons-material';
import { Money } from '@mui/icons-material';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import ReservationFrom from './ReservationFrom';
import BusSeat from './BusSeat';
import { useSelector } from 'react-redux';
function ReservationDetails() {
    const Destination= useSelector((state)=>state.selected_destination);
  return (
  
    < div className='container-fluid p-3'>
        <div className='rm_title_container'>
        <TitleHeader title="Personal details and Seating" />
        </div>

        <div className="details_container">
            <div className='bus_image_container'>
                <img src={Destination[0].busImage} alt=""/>
            </div>
            <div className='bus_details_container'>
                <div className='journy_details'>
                    <div>
                    <PinDrop className='form_lable_icons'/><h6>From</h6>
                    </div>
                    <div>
         `              <h6>Addisababa</h6>
                    </div>
                    
                </div>
                <div className='journy_details'>
                <div>
                    <PinDrop className='form_lable_icons'/><h6> To</h6>
                    </div>
                    <div>
         `              <h6>{Destination[0].schedule}</h6>
                    </div>
                    
                </div>
                <div className='journy_details'>
                    <div>
                    <DepartureBoardIcon className='form_lable_icons'/><h6>Type</h6>
                    </div>
                    <div>
                      <h6>{Destination[0].travel_type}</h6>
                    </div>
                    
                </div>
                <div className='journy_details'>
                    <div> <CalendarMonth className='form_lable_icons'/> <h6>Date</h6></div>
                    <div><h6>January 08,2024</h6></div>
                    
                </div>
                <div className='journy_details'>
                <div><PunchClockSharp className='form_lable_icons'/><h6>Start Time</h6></div>
                    <div>
                   <h6>7:00 am</h6>
                    </div>
                   
                </div>
                <div className='journy_details'>
                    <div><Money className='form_lable_icons' /><h6>Price</h6></div>
                    <div><h6>{Destination[0].price}$</h6></div>
                  
                </div>

            </div>
        </div>
        <div className='form_layout mt-3'>
            <div className='seat_container'><BusSeat/></div>
            <div className='reservationfrom_container'><ReservationFrom/></div>
            <div className='check_out_container'>daflkjdkfjkladjfklda</div>
        </div>


    </div>

  )
}

export default ReservationDetails