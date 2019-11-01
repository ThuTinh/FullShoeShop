import { combineReducers } from 'redux'
import login from './login'
import sign from './sign'
import customers from './customers'
import categories from './category'
const reducerControler = combineReducers({
    login,
    sign,
    customers,
    categories
});

export default reducerControler;