//creating action
const BUY_CAKE='BUY_CAKE'

function buycake(){
    return {
        type:BUY_CAKE,
        info:'first redux action'
    }
}

//(previousState,action)=newState
const initialState={
    num_of_cakes:10
}


//reducer
const reducer=(state=initialState,action)=>{
 switch(action.type){
     case BUY_CAKE:return{
         ...state,
         num_of_cakes:state.num_of_cakes-1
     }
     default:return state
 }
}
