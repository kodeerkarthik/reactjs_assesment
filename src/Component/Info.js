import React, { Component } from 'react';
import {connect} from 'react-redux';
import browserHistory from '../utils/browserHistory'; 
import { randomBytes } from 'crypto';
import UniqueID from 'react-html-id';

class Info extends Component {
    constructor(props){
        super(props);
        UniqueID.enableUniqueIds(this);

        this.state={
            name:'',
            username:'',
            array:[],
            id:''
            
           
        }
    }
    handleChange=(e)=>{
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit=(e)=>{
        
        let reqobj={
            name1:this.state.name,
            username1:this.state.username, 
            id:this.nextUniqueId()    
        }
        let ary=this.state.array.push(reqobj)
        this.setState({ary});
        console.log(this.state.array)
    }
    remove=(id)=>{
        // let ele=id;
        console.log(id);
    
        var index = this.state.array.indexOf(id)
        
            this.state.array.splice(index, 1);
            this.setState({array:this.state.array});
        
    }
    logout=()=>{
        browserHistory.push('/')
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <p className="h1">React Application</p>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
                        <button className='lable' onClick={this.logout}>Logout</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <p className="h2">Add User</p><br/>
                        <label className="lable">Name</label><br/>
                        <input className="inptfield" type='text' name="name" onChange={this.handleChange}></input><br/>
                        <label className="lable">Username</label><br/>
                        <input className="inptfield" type='text' name="username" onChange={this.handleChange}></input><br/>
                        <button className="btn_add" onClick={this.handleSubmit}>Add new user</button>
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <p className="h2">View User</p>
                        <div className="row margint">
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 lable">Name</div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 lable">Username</div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 lable">Actions  </div>
                        </div>
                        <hr/>
                        {this.state.array.map((display) => (
                        <div className="row" key={display.id}>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 linegap">{display.name1}</div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 linegap">{display.username1}</div>
                            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 linegap">
                                <button onClick={() => {this.editRow(display)}}>edit</button>
                                <button onClick={() => this.remove(display.id)}>delete</button>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>             
                </div>
            </div>
        );
    }
}
export default Info;

