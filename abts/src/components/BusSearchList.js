import React from 'react'
import "./BusSearchList.css";
import { useNavigate } from 'react-router-dom';
import busList from '../Dummydata/DummyData';
import { useDispatch } from 'react-redux';
import { set_destination } from '../store/Actions';
function BusSearchList(props) {
    const navigate= useNavigate();
    const dispatch= useDispatch();
    const Makereservation=(id)=>
    {  const destination = busList.filter(bus=>{
        return bus.bus_ID==id
    })
        dispatch(set_destination(destination));
        navigate("/Makereservation/12")

    }
  return (
    <div className='searchTable_container'>
         <table className="table   table-striped ">
                <thead className=''>
                <tr className='table-info text-center '>
                    <th>Image</th>
                    <th>BusName</th>
                    <th>Sechedule</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Seats Available</th>
                    <th>View</th>
                    
                </tr>
                </thead>
                <tbody>
                
                    {
                        busList.map((bus)=>{
                            return(
                                <tr onClick={()=>Makereservation(bus.bus_ID)} style={{ cursor: "pointer"}}>
                                <td><img src={bus.busImage} style={{width:"70px"}} alt="bus"></img></td>
                                <td className='list_text_format'>{bus.busName}</td>
                                <td className='list_text_format'>{bus.schedule}</td>
                                <td className='list_text_format'>{bus.travel_type}</td>
                                <td className='list_text_format'>${bus.price} /seat</td>
                                <td className='list_text_format'>{bus.Seats_available}/54</td>
                                <td><button className='reservation_btn '>Make reservation</button></td>
                                </tr>
                            )
                        })
                    }
                    
                
               
                </tbody>
        </table>

    </div>
  )
}

export default BusSearchList