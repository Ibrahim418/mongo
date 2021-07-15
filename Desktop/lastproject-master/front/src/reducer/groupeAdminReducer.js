import {
    GETGROUPEADMIN_SUCCESS,
    GETGROUPEADMIN_FAIL
  } from "../action/type";
  let initState = {
    groupes:[],
 
  };



const groupeadminReducer = (state = initState, action) => {
    switch (action.type){
    case GETGROUPEADMIN_SUCCESS:
      return{
        ...state,
        groupes:action.payload,
      }
  case GETGROUPEADMIN_FAIL:
    return{
      ...state,
     
    }
  
  
      default:
        return state;
    }
  };
  
  export default groupeadminReducer;
  