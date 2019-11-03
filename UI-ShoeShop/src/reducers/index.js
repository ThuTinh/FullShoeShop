import { combineReducers } from 'redux'
import login from './login'
import sign from './sign'
import customers from './customers'
import categories from './category'
import products from './product'
import supliers from './suplier'
import productSupliers from './productSuplier'
const reducerControler = combineReducers({
    login,
    sign,
    customers,
    categories,
    products,
    supliers,
    productSupliers
});

export default reducerControler;