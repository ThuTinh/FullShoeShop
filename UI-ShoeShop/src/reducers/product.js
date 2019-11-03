import * as Types from '../constants/actionType'
var initState = {};

const product = (state = initState, action)=>{
    switch(action.type)
    {
        case Types.GET_PRODUCT:
           state = action.product;
           return state;
        default:
            return state;
    }
}

export default product;