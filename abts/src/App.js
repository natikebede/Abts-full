import React from 'react'
import { Route ,Routes } from 'react-router-dom';
import "./App.css"
import Loginpage from './Pages/Loginpage';
import CashierHome from './Pages/CashierHome';
import NavBar from './components/NavBar';
import Reservation from './Pages/Reservation';
import BusSeat from './components/BusSeat';

import ReservationDetails from './components/ReservationDetails';
function App() {
  return (

    <div className="">
    <Routes>
        <Route exact path='/' element={<Loginpage/>}/>
        
        <Route path='/Home' element={(<NavBar><CashierHome/></NavBar>)}/>
        <Route path='/MakeReservation' element={(<NavBar><Reservation/></NavBar>)}/>
        <Route path='/MakeReservation/:busID' element={(<NavBar><ReservationDetails/></NavBar>)}/>
        
        
        </Routes>
    </div>
   
  );
}

export default App;
