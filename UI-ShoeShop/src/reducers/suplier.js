import * as Types from '../constants/actionType'
var initState = [];

const supliers = (state = initState, action)=>{
    switch(action.type)
    {
        case Types.GET_SUPLIER:
           state = action.supliers;
           return state;    
        default:
            return state;
    }
}

export default supliers;