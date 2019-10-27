import { combineReducers } from 'redux'
import login from './login'
import sign from './sign'
import customers from './customers'
const reducerControler = combineReducers({
    login,
    sign,
    customers
});

export default reducerControler;