import { connect } from 'react-redux';
import RegisterComponent from './LoginComponent';

const mapStateToProps = (state) => {
  return {
    isRegisterPending: state.isRegisterPending,
    isRegisterSuccess: state.isRegisterSuccess,
    registerError: state.RegisterError
  };


const mapDispatchToProps = (dispatch) => {
  return {
    register: (email, password) => dispatch(Register(email, password))
  };
}


const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);


export default RegisterContainer;
