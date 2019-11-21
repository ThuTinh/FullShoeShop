import  * as Types from '../constants/actionType' 
var init = {}

const user = (state = init, action)=>{
    switch(action.type)
    {
        case Types.GET_USER:
            state = action.user
            return state;
        default: 
            return state;

    }

} 

export default user