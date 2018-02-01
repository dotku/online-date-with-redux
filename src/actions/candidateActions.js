import * as qs from "query-string"
import axios from "axios"

export function fetchCandidate() {
  return function(dispatch) {
    let apiURL = 'https://randomuser.me/api/?' + qs.stringify({
      results: 10
    });
    console.log(apiURL);
    axios.get(apiURL)
      .then((rsp) => {
        console.log('rsp', rsp);
        dispatch({
          type: "FETCH_CANDIDATE_SUCCSSFUL",
          data: rsp.data,
        });
      })
      .catch((err)=> {
        dispatch({
          type: "FETCH_CANDIDATE_FAIL",
          payload: err,
        });
      });
  }
}

export function setAgeMax(num) {
  return {
    type: 'SET_CANDIDATE_AGE_MAX',
    payload: {
      ageMax: num
    }
  }
}

export function setAgeMin(num) {
  return {
    type: 'SET_CANDIDATE_AGE_MIN',
    payload: {
      ageMin: num
    }
  }
}

export function setGender(str) {
  return {
    type: 'SET_CANDIDATE_GENDER',
    criteria: {
      gender: str
    }
  }
}