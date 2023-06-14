import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"
import reducer from "./reducer"

const composeEnchaner = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnchaner(applyMiddleware(thunkMiddleware)))


export default store