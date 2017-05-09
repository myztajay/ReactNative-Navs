import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types'
import firebase from 'firebase'

export const emailChanged = (text) =>{
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) =>{
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}


export const loginUser = ({ email, password }) =>{
  return (dispatch) =>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(()=> {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch((err)=> loginUserFail(dispatch, err))
    })
  }
}

const loginUserFail = (dispatch, err) => {
  dispatch({ type: LOGIN_USER_FAIL,
            payload: String(err)
          })
};

const loginUserSuccess = (dispatch, user) =>{
  dispatch({
    type: LOGIN_USER_SUCCESS ,
    payload: user
  })
}
