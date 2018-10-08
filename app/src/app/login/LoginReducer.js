
import {
    LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, 
    REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS} from './LoginActions';


const LoginState = {
  isLoginPending:false,
  isLoginSuccess:false,
  loginError:null,
}    

export default function LoginReducer(state=LoginState, action) {
    switch(action.type){
      case LOGIN_REQUEST:
        return Object.assign({}, state, {});
      case LOGIN_FAILURE:
        return Object.assign({}, state, {});
      case LOGIN_SUCCESS:
        return Object.assign({}, state, {});
      case REGISTER_REQUEST:
        return Object.assign({}, state, {});
      case REGISTER_FAILURE:
        return Object.assign({}, state, {});
      case REGISTER_SUCCESS:
        return Object.assign({}, state, {});    
      }
}