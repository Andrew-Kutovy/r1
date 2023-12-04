import {combineReducers, createStore} from "redux";
import {userReducer} from "./reducers/userReducer";

const rootReducer = combineReducers({
    users: userReducer,
    errors: ''
    //cars: carReducer,
})
const store = createStore(rootReducer);

export {store}