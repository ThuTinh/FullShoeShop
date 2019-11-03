import * as Types from '../constants/actionType'
var initState = [];

const products = (state = initState, action)=>{
    switch(action.type)
    {
        case Types.GET_PRODUCT:
           state = action.products;
           return state;    
        default:
            return state;
    }
}

export default products;