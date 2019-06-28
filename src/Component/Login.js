import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {handleClick} from '../Action/Task3action';
import browserHistory from '../utils/browserHistory'; 

class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            user:'',
            pwd:'' 
        }
    }
    handleChange=(e)=>{
        debugger
        // e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
    }
    register=()=>{
        browserHistory.push('reg');
    }
    login=()=>{
        if(this.state.username.length==0 && this.state.password.length==0)
            this.setState({user:'Username is required',pwd:'password is required'});
        else if(this.state.username.lenght==0)
            this.setState({user:'Username is required'});
        else if(this.state.password.length==0)
            this.setState({pwd:'password is required'});
        else{
            browserHistory.push('info');}
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <h1 className="head">Login</h1>
                        <label className="lable" id='uname'>Username</label><br/>
                        <input className="inpt" type='text' name='username' onChange={this.handleChange}></input><br/>
                        <p className='red'>{this.state.user}</p>
                        <label className="lable" id='pwd'>Password</label><br/>
                        <input className="inpt" type='password' name='password' onChange={this.handleChange}></input><br/>
                        <p className='red'>{this.state.pwd}</p>
                        <button className="btn_reg" onClick={this.login}>Login</button>
                        <label className="link" onClick={this.register}>Register</label>
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                </div>
            </div>
        );
    }
}

export default Login;