import {
  ADDPOST_SUCCESS,
  ADDPOST_FAIL,
  GETPOSTS,
  GET_POST,
  GETBYDATE,
  MOST_LIKED_POST,
  LIKEPOST_ERROR,
  POSTDELETED_SUCCESS,
  POSTDELETED_FAIL,
  POSTUPDATED_SUCCESS,
} from "../action/type";
let initState = {
  posts: [],
  post: null,
  isLoading: false,
  errors: {},
};

const PostReducer = (state = initState, action) => {
  switch (action.type) {
    case ADDPOST_SUCCESS:
      case POSTUPDATED_SUCCESS:
    case GET_POST:
    case GETBYDATE:
      return {
        ...state,
        post: action.payload.data,

        errors: {},
        isLoading: false,
      };

    case GETPOSTS:
    case MOST_LIKED_POST:
      return {
        ...state,
        posts: action.payload,
        errors: {},
        isLoading: false,
      };

    case POSTDELETED_SUCCESS:
      return {
        ...state,
      };
    // case ADDLIKE_SUCCESS:
    //   // let index=state.posts.findIndex((post)=>post.postId===action.payload.postId);
    //   // state.posts[index]=action.payload;
    //   const modifyPost = state.posts.find(post=> post.postId == action.id)
    //   return{
    //     ...state,
    //     posts:[state.posts,action.payload]
    //   }

    case ADDPOST_FAIL:
    case LIKEPOST_ERROR:
    case POSTDELETED_FAIL:
      return {
        ...state,
        errors: action.payload,
        isLoading: true,
      };
    default:
      return state;
  }
};

export default PostReducer;
