import * as Types from '../constants/actionType'
var initState = [];

const categories = (state = initState, action)=>{
    switch(action.type)
    {
        case Types.GET_CATEGORY:
           state = action.categories;
           return state;
        case Types.DELETE_CATEGORY:
            
        default:
            return state;
    }
}

export default categories;