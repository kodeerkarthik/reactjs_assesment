import React, { Component } from 'react';
import {connect} from 'react-redux';

import {Registerclick,Storeuser,Storepwd} from '../Actions/Action';
class Register extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <h1 className="head">Register</h1>
                        <label className="lable">First Name</label><br/>
                        <input className="inpt" type='text'></input><br/>
                        <label className="lable">Last Name</label><br/>
                        <input className="inpt" type='text'></input><br/>

                        <label className="lable">Username</label><br/>
                        <input className="inpt" type='text' id='usrname'onChange={()=>this.props.Storeuser(this.value)}></input><br/>

                        <label className="lable">Password</label><br/>
                        <input className="inpt" type='password' id='pwd'onChange={()=>this.props.Storepwd(this.value)}></input><br/>

                        <button className="btn_reg" onClick={this.props.Registerclick}>Register</button>
                            
                        <label className="link">Cancel</label> 
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                </div>   
            </div> 
        );
    }
}
const mapStateToProps=(state)=>{
  
    const{username}=state.Register_reducer;
    const{password}=state.Register_reducer;
    return{username,password};
};
export default connect(mapStateToProps,{Registerclick,Storeuser,Storepwd})(Register);
