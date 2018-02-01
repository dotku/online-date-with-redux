export default function reducer(state={
    data: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_CANDIDATE_SUCCSSFUL": {
        console.log(action);
        return {...state, fetching: true, data: action.data}
      }
      case "FETCH_USER_REJECTED": {
        return {...state, fetching: false, error: action.data}
      }
      case "FETCH_USER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.data,
        }
      }
      case "SET_USER_NAME": {
        return {
          ...state,
          user: {...state.user, name: action.data},
        }
      }
      case "SET_USER_AGE": {
        return {
          ...state,
          user: {...state.user, age: action.data},
        }
      }
      default:
        return state
    }

    return state
}