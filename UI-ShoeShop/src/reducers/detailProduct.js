import *as Types from '../constants/actionType'

var inintState = []

const detailProduct =  (state = inintState, action) => {

    switch (action.type) {
        case Types.GET_DETAIL_PRODUCT:
            state = action.detailProduct;
            console.log("state", state);
            return  state;

        default:
            return state;

    }
}

export default detailProduct;
