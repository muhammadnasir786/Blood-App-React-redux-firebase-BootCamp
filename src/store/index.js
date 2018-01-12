import { createStore, combineReducers, applyMiddleware } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

//requiring all reducers
import AuthReducer from './reducers/authReducer';
import BBReducer from './reducers/bbReducer';

//requiring all epics
import AuthEpic from './epic/authEpic';
import  BBEpic from "./epic/BBEpic";
//combine epic
const rootEpic = combineEpics(
    AuthEpic.createUser,
    AuthEpic.loginUser,
    BBEpic.addPost,
    BBEpic.getPost,
    BBEpic.deletePost,
    BBEpic.updatePost,
    BBEpic.getCancelLogout,
    BBEpic.getProfile,
    BBEpic.profileUpdate,
    BBEpic.addDonar,
    BBEpic.getDonars,

    // BBEpic.profileUpdate,
    
    
);
//combine reducers
const rootReducer = combineReducers({
    AuthReducer,
    BBReducer

})

//creating middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

//appling middleware
const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore);

//creating store
export let store = createStoreWithMiddleware(rootReducer)
store.subscribe(()=>{
    console.log(store.getState())
});
