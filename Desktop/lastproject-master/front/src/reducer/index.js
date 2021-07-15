import {combineReducers} from 'redux'
import authReducer from './authReducer'
import postReducer from './postReducer'
import userReducer from './userReducer'
import groupeReducer from './groupeReducer'
import groupeadminReducer from './groupeAdminReducer'

export default combineReducers(  {
        auth: authReducer ,
    posts:postReducer,
     user:userReducer,
     groupe:groupeReducer,
     gadmin:groupeadminReducer })