import *as Types from '../constants/actionType'

var inintState = []

const ordersSuplier =  (state = inintState, action) => {

    switch (action.type) {
        case Types.GET_ORDERS_SUPLIER:
            state = action.ordersSuplier
            return  state;

        default:
            return state;

    }
}

export default ordersSuplier;
