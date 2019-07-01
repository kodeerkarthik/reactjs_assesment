import React, { Component } from 'react';
import {connect} from 'react-redux';
import {LOGIN} from '../Actions/Action';


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
        this.setState({[e.target.name]:e.target.value});
    }
    register=()=>{
        browserHistory.push('reg');
    }
    login=()=>{
        let reg_user=/^[A-Za-z0-9]{2,10}$/;
        let reg_pwd=/^[@#][A-Za-z0-9]{7,13}$/;
        let usernamel=this.state.username.length, pwdl=this.state.password.length;
        let temp=0;
        
        if(usernamel===0)this.setState({user:'Username is required'});
        else if(!reg_user.test(this.state.username)) this.setState({user:'Invalid Username'});
        else temp++;

        if(pwdl===0){this.setState({pwd:'Password is required'});}
        else if(!reg_pwd.test(this.state.password)){this.setState({pwd:'Invalid Password'});}
        else temp++;
        
        if(temp>1){ 
            browserHistory.push('info');
            // this.props.LOGIN();
        }
    }
    render() {
        return (
            <div>
                
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <h2>{this.props.regmsg}</h2>
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
const mapStateToprops=(state)=>{
    const {loginmsg}=state.Register_reducer;
    const {regmsg}=state.Register_reducer;
    return {loginmsg,regmsg};
};

export default connect(mapStateToprops, {LOGIN})(Login);