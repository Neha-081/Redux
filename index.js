//store
const redux=require('redux')
const createStore=redux.createStore


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

//store holding application state
const store=createStore(reducer)

//allow access to state via getState()
console.log('initialState',store.getState());

//register listener via subscribe(listener)
const unsubscribe=store.subscribe(()=>console.log('updated state',store.getState()))

//allow state to be updated via dispatch(action)
store.dispatch(buycake())   //buycake i.e-action
store.dispatch(buycake())   
store.dispatch(buycake())   

//unregistering of listeners via function returned by subscribe(listener)
//unsubscribe changes
unsubscribe()


