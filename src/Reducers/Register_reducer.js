import * as ActionTypes from '../Actions/types';
import browserHistory from '../utils/browserHistory'; 


const intialState = {
   username:'',
   password:''  
};
export default(state=intialState,action)=>{
    switch(action.type){
        case ActionTypes.STOREUSER:{
            return{...state,username:action.payload}
        }
        case ActionTypes.STOREPWD:{
            return{...state,password:action.payload}
        }
        case ActionTypes.REG:{
            browserHistory.push('login')
        }
        default: 
            return state;
    }
}
