import React from 'react';
const Table = props => (
    <div>
        <div className="row margint border">   
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 lable">Name</div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 lable">Username</div>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 lable">Actions  </div>
        </div>
        {props.users.length > 0 ? (
            props.users.map(user => (
                <div className="row" key={user.id}>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 linegap">{user.name}</div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 linegap">{user.username}</div>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 linegap">
                        <button onClick={() => {props.editRow(user)}} className="btn1">Edit</button>
                        <button onClick={() => props.deleteUser(user.id)} className="btn2">Delete</button>
                    </div>
                </div>
            ))
            ) : (
            <div className="row">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">No users</div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"></div>
            </div>
        )}
    </div>
)
export default Table;

