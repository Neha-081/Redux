//store
const redux=require('redux')
const reduxLogger=require('redux-logger')

const createStore=redux.createStore
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()


//creating action
const BUY_CAKE='BUY_CAKE'
const BUY_ICECREAM='BUY_ICECREAM'

function buyCake(){
    return {
        type:BUY_CAKE,
        info:'first redux action'
    }
}
function buyIceCream(){
    return {
        type:BUY_ICECREAM
    }
}


//(previousState,action)=newState
// const initialState={
//     num_of_cakes:10,
//     num_of_icecreams:20
// }

const initialCake={
    num_of_cakes:10
}
const initialIceCream={
    num_of_icecreams:20
}



//reducer
// const reducer=(state=initialState,action)=>{
//  switch(action.type){
//      case BUY_CAKE:return{
//          ...state,
//          num_of_cakes:state.num_of_cakes-1
//      }
//      case BUY_ICECREAM:return{
//         ...state,
//         num_of_icecreams:state.num_of_icecreams-1
//     }
//      default:return state
//  }
// }

const CakeReducer=(state=initialCake,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            num_of_cakes:state.num_of_cakes-1
        }
        default:return state
    }
   }

   const IceCreamReducer=(state=initialIceCream,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            num_of_icecreams:state.num_of_icecreams-1
        }
        default:return state
    }
   }  

   //combine reducers
   const rootReducer=combineReducers({
       cake:CakeReducer,
       iceCream:IceCreamReducer
   })

//store holding application state
const store=createStore(rootReducer,applyMiddleware(logger))

//allow access to state via getState()
console.log('initialState',store.getState());

//register listener via subscribe(listener)
const unsubscribe=store.subscribe(()=>{})

//allow state to be updated via dispatch(action)
store.dispatch(buyCake())   //buyCake i.e-action
store.dispatch(buyCake())   
store.dispatch(buyCake())   
store.dispatch(buyIceCream())   
store.dispatch(buyIceCream())   

//unregistering of listeners via function returned by subscribe(listener)
//unsubscribe changes
unsubscribe()


