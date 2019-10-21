import { combineReducers } from 'redux'
import login from './login'
import sign from './sign'
const reducerControler = combineReducers({
    login,
    sign
});

export default reducerControler;