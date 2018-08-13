import { connect } from 'react-redux';
import LoginComponent from './LoginComponent';

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.isLoginPending,
    isLoginSuccess: state.isLoginSuccess,
    loginError: state.loginError
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);


export default LoginContainer;
