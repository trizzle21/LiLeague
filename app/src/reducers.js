import { combineReducers } from 'redux';
import { LoginReducer } from './app/login/LoginReducer';


const rootReducer = combineReducers({
    login: LoginReducer
});

export default rootReducer;
