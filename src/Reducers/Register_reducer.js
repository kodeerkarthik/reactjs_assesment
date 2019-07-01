import * as ActionTypes from '../Actions/types';
import browserHistory from '../utils/browserHistory'; 


var intialState = {
   loginmsg:'',
   regmsg:''
};
// const reducer = (state=intialState,action)=>{
//     var newState={...state};
//     switch(action.type){
//         case ActionTypes.REG:newState.regmsg='Register successfull';
//         break;
//         case ActionTypes.LOGIN:newState.loginmsg='Login successfull';
//         break;            
// }
// return newState;
// }
// export default reducer;
export default(state=intialState,action)=>{
    debugger
    switch(action.type){

        case ActionTypes.LOGIN:{
            return{...state,loginmsg:'Login successfull'}
                
        }
        case ActionTypes.REG:{
            return{...state,regmsg:'Register successfull'}
console.log(this.state.loginmsg)
        }
        
        default: 
            return state; 
    }
}

