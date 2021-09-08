import reducer from "./reducer";
import {createStore, compose, applyMiddleware} from 'redux'
import thunk from "redux-thunk"


const devtool= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, compose(applyMiddleware(thunk),devtool))
export default store