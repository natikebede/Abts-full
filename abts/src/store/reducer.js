import * as acTypes from "./Actiontypes.js"
export const initialState=
{
    passenger:[ ],
    user:null,
    selected_destination:{}
};

 export const reducer =(state=initialState, action)=>
 {   switch(action.type)
    {
        case acTypes.AddPassanger:
        return {
            ...state,
            passenger:[...state.passenger,action.payload]
        };
        case acTypes.set_selected_destination:
        
            return{
                ...state,selected_destination:action.payload
            };
        
        default:
            return state;
    }

 }
