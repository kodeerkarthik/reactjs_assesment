import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {handleClick} from '../Action/Task3action';
class Login extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <h1 className="head">Login</h1>
                        <label className="lable">Username</label><br/>
                        <input className="inpt" type='text'></input><br/>
                        <label className="lable">Password</label><br/>
                        <input className="inpt" type='password'></input><br/>
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