import { combineReducers } from 'redux'
import login from './login'
import sign from './sign'
import customers from './customers'
import categories from './categorys'
import products from './products'
import supliers from './supliers'
import productSupliers from './productSupliers'
import suplier from './suplier'
const reducerControler = combineReducers({
    login,
    sign,
    customers,
    categories,
    products,
    supliers,
    productSupliers,
    suplier

});

export default reducerControler;