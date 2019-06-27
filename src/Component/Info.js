import React, { Component } from 'react';
import {connect} from 'react-redux';
class Info extends Component {
    render() {
        return (
            <div>
                <p className="h1">React Application</p>
                <div className="row">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <p className="h2">Add User</p><br/>
                        <label className="lable">Name</label><br/>
                        <input className="inptfield" type='text'></input><br/>
                        <label className="lable">Username</label><br/>
                        <input className="inptfield" type='text'></input><br/>
                        <button className="btn_add">Add new user</button>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <p className="h2">View User</p>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>             
                </div>
            </div>
        );
    }
}
export default Info;