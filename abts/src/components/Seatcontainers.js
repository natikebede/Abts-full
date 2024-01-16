import React, { useState } from 'react'
import {Data_reserved_seat} from "../Dummydata/DummyData.js"
import { Data_selected_Seat } from '../Dummydata/DummyData.js';
import EventSeatIcon from '@mui/icons-material/EventSeat';
function Seatcontainer({index}) {
    const [selected_seat ,set_Selected_seat] =useState(Data_selected_Seat);
    const [reserved_seat,set_reserved_sear]= useState(Data_reserved_seat);
    const selected_status=selected_seat.includes(index);
    console.log("the status is ",selected_status)
    const handelSelected=()=>
    {
        
        if(!selected_status)
        {
            
        }  
        set_Selected_seat(...selected_seat,index);
      
    }
   const reserved_status=reserved_seat.includes(index);
   console.log(reserved_status);
   
        if (reserved_status)
        {
                return (
                    <EventSeatIcon  className='Seat_icon_reserved'/>
                );
        }
        else
        {
           
            if(selected_status)
            {
                return (
                    <EventSeatIcon  className='Seat_icon_selected'/>
                );
            }
            else
            {
                return (
                    <EventSeatIcon onClick={()=>handelSelected()} className='Seat_icon'/>
                );

            }
            
        }
}

export default Seatcontainer