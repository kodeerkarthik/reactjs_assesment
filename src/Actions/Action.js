import *as ActionTypes from './types.js';

export function LOGIN(){
    return function(dispatch){
        dispatch({type:"LOGIN"});
    }
}
export function REG(){
    return function(dispatch){
        dispatch({type:"REG"});
    }
}
export function handleClick(){
    return function(dispatch){
        dispatch({type:"CLICK"});
    }
}
