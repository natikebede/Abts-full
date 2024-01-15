import * as acTypes from "./Actiontypes.js"
export const setpassanger= (passanger)=>{
   return { 
            type:acTypes.AddPassanger,
             payload:passanger
            }
}
//for setting destination
export const set_destination=(destination)=>
{
   return {
      type:acTypes.set_selected_destination,
      payload :destination
   }
}
//for settign user cashier 

export const set_user=(user)=>
{
   return {
      type:acTypes.set_user,
      payload:user
   }
}

