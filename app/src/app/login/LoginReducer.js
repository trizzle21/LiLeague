
import {
    LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS, 
    REGISTER_REQUEST, REGISTER_FAILURE, REGISTER_SUCCESS} from './LoginActions';


const LoginState= {


}

export default function LoginReducer(state=SpotifyState, action) {
    switch(action.type){
      case LOGIN_REQUEST:
            return Object.assign({}, state, {});
    }
}