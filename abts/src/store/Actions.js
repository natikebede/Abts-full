import * as acTypes from "./Actiontypes.js"
export const setpassanger= (passanger)=>{
   return { 
            type:acTypes.AddPassanger,
             payload:passanger
            }
}
export const set_destination=(destination)=>
{
   return {
      type:acTypes.set_selected_destination,
      payload :destination
   }
}