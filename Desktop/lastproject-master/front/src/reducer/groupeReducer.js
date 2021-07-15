import {
  GETGROUPE_FAIL,
  GETGROUPE_SUCCESS,
  CREATEGROUPE_FAIL,
  GETGROUPES_FAIL,
  GETGROUPES_SUCCESS,
} from "../action/type";

let initState = {
  groupes: [],
  groupe: {},
};

const groupeReducer = (state = initState, action) => {
  switch (action.type) {
    case GETGROUPES_SUCCESS:
      return {
        ...state,
        groupes: action.payload,
      };
    case GETGROUPE_SUCCESS:
      return {
        ...state,
        groupe: action.payload,
      };
    case GETGROUPE_FAIL:
    case CREATEGROUPE_FAIL:
    case GETGROUPES_FAIL:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default groupeReducer;
