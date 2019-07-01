import React, { useState, Fragment } from 'react';
import Add from './Add';
import Edit from './Edit';
import Table from './Table';
import {connect} from 'react-redux';
import browserHistory from '../utils/browserHistory';
 
const Info = () => {
	const usersData = []
	const initialFormState = { id: null, name: '', username: '' }
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}
	const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}
	const updateUser = (id, updatedUser) => {
		setEditing(false)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}
	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}
	return (
		<div className="container">
        <div class="row">
        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm">
			{/* <h1>{this.props.loginmsg}</h1> */}
			<h2 className="h1"><b>React Application</b></h2>
        </div>
        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm">
			<a className='lable right' href="/"><b>Logout</b></a>
        </div>
        </div>
        <div class="row">
        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm">
            {editing ? (
						<Fragment>
							<p className="h2"><b>Edit user</b></p>
							<Edit	editing={editing}	setEditing={setEditing}	currentUser={currentUser}	updateUser={updateUser}/>
						</Fragment>
					  ) : (           
						<Fragment>              
							<p className="h2"><b>Add user</b></p>
							<Add addUser={addUser} />
						</Fragment>
             )}
        </div>
        <div class="col-sm-6 col-lg-6 col-md-6 col-xs-6 frm">
             <p className="h2"><b>View users</b></p>
				  	 <Table users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
        </div>
      </div>    
	)
}
const mapStateToprops=(state)=>{
    const {loginmsg}=state.Register_reducer;
    
    return {loginmsg};
};
export default connect(mapStateToprops)(Info);











