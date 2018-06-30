import { React } from 'React';

class LoginComponent extends React.Component {

    constructor(props){
        super(props);
        this.state={};

    }

    onSubmit(){

    }

    render(){
        <form onSubmit={handleSubmit} className="form form--large">
            <label>Username</label>
            <div>
                <input type="text" />
            </div>
            <label>Password</label>
                <div>
                    <input type="password" />
                </div>

            
            <button type="submit" className="btn btn--large">
                Submit
            </button>        

        </form>
    }

}