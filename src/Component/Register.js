import React, { Component } from 'react';
import {connect} from 'react-redux';
import browserHistory from '../utils/browserHistory'; 
import {REG} from '../Actions/Action';

// import {store} from '../Actions/Action';
class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:'',
            lastname:'',
            username:'',
            password:'',
            fname:'',
            lname:'',
            user:'',
            pwd:'',
            array:[] 
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit=(e)=>{
    
        let t=0;
        let reqobj={
            firstname1:this.state.firstname,
            lastname1:this.state.lastname,
            username1:this.state.username,
            password1:this.state.password 
        }
        let ary=this.state.array.push(reqobj)
        this.setState({ary});
        let fnamel=this.state.firstname.length, lnamel=this.state.lastname.length, usernamel=this.state.username.length, pwdl=this.state.password.length;
        let reg_user=/^[A-Za-z0-9]{2,10}$/;
        let reg_pwd=/^[@#][A-Za-z0-9]{7,13}$/;
       
        if(fnamel===0) this.setState({fname:'Firstname is required'});
        else if(!reg_user.test(this.state.firstname)) this.setState({fname:'Invalid Firstname'});
        else{
             t++;
             this.setState({fname:''});
        }
           
        if(lnamel===0) this.setState({lname:'Lastname is required'});
        else if(!reg_user.test(this.state.lastname)) this.setState({lname:'Invalid Lastname'}); 
        else {
            t++;
            this.setState({lname:''});
        }
        
        if(usernamel===0) this.setState({user:'Username is required'});
        else if(!reg_user.test(this.state.username)) this.setState({user:'Invalid Username'});
        else t++;
        
        if(pwdl===0) this.setState({pwd:'Password is required'});
        else if(!reg_pwd.test(this.state.password)) this.setState({pwd:'Invalid Password'});
        else {
            t++;
            this.setState({pwd:''});
        }
        
        if(t>3) {
            this.props.REG();
            browserHistory.push('/');
            
        }
    }  
    cancel=()=>{
        browserHistory.push('/');
    }  
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <h1 className="head">Register</h1>
                        <label className="lable">First Name</label><br/>
                        <input className="inpt" type='text' name='firstname' onChange={this.handleChange}></input><br/>
                        <p className='red'>{this.state.fname}</p>
                        <label className="lable">Last Name</label><br/>
                        <input className="inpt" type='text' name='lastname' onChange={this.handleChange}></input><br/>
                        <p className='red'>{this.state.lname}</p>
                        <label className="lable">Username</label><br/>
                        <input className="inpt" type='text' name='username' onChange={this.handleChange}></input><br/>
                        <p className='red'>{this.state.user}</p>
                        <label className="lable">Password</label><br/>
                        <input className="inpt" type='password' name='password' onChange={this.handleChange}></input><br/>
                        <p className='red'>{this.state.pwd}</p>
                        <button className="btn_reg" onClick={this.handleSubmit}>Register</button>
                        <label className="link" onClick={this.cancel}>Cancel</label> 
                        {/* <a href="/" className="link">Cancel</a> */}
                    </div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"> <h2>{this.props.regmsg}</h2></div>
                </div>   
            </div> 
        );
    }
}
const mapStateToprops=(state)=>{
    const {regmsg}=state.Register_reducer;
    
    return {regmsg};
};

export default connect(mapStateToprops, {REG})(Register);