import  * as Types from '../constants/actionType' 
var init = []

const customers = (state = init, action)=>{
    switch(action.type)
    {
        case Types.GET_CUSTOMER:
            state = action.customers
            console.log(state,"1111");
            return state;
        default: 
            return state;

    }

} 

export default customers