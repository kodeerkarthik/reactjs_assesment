import *as ActionTypes from './types.js';

export function Storeuser(id){
    return function(dispatch){
        dispatch({type:"STOREUSER",payload:id});
    }
}
export function Storepwd(id){
    return function(dispatch){
        dispatch({type:"STOREPWD",payload:id});
    }
}
export function Registerclick(){
    return function(dispatch){
        dispatch({type:"REG"});
    }
}