import { React } from 'React';
import 

class LoginComponent extends React.Component {

    constructor(props){
        super(props);
       
        this.state={
            'username':'',
            'password':'',
            'submitted':false
        };

        this.props.logout();

        this.handleChange = this.handleChange.bind(this);    
        this.handleSubmit = this.handleChange.bind(this);    

    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        e.preventDefault();
        
        this.setState({ submitted: true });
        const { username, password } = this.state;

        this.login(this.state);
    }

    render(){
        <form onSubmit={handleSubmit} className="form form--large">
            <label>Username</label>
            <div>
                <input type="text" name="username" onChange={this.handleChange}/>
            </div>
            
            <label>Password</label>
                <div>
                    <input type="password" name="password" onChange={this.handleChange}/>
                </div>

            
            <button type="submit" className="btn btn--large">
                Submit
            </button>        

        </form>
    }

}