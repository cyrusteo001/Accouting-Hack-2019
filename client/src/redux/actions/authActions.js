import {
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_FAIL,
    LOGIN_USER_SUCCESS,
    CREATE_USER,
    CREATE_USER_FAIL,
    CREATE_USER_SUCCESS
} from './types';
import axios from 'axios';

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({
            type: PASSWORD_CHANGED,
            payload: password,
        })
    }
};

//takes in userData object
export const loginUser = (userData) => {
    const user = {
        name: "John Lee",
        email: "johnlee90@gmail.com",
        password: "password"
    }
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });
        // TODO: insert GET call here
        if (userData.name === user.name && userData.password === user.password) {
            loginUserSuccess(dispatch, user);
        } else {
            loginUserFail(dispatch)
        }
    }
};

export const loginUserFail = (dispatch) => {
    dispatch({ type: LOGIN_USER_FAIL });
};

export const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user,
    })
};

// takes in user data object
export const createUser = (userData) => {
    const user = {
        name: "John Lee",
        email: "johnlee90@gmail.com",
        password: "password"
    }
    return (dispatch) => {
        dispatch({ type: CREATE_USER });
        // insert POST call here
        // createUserSuccess(dispatch, user)
        createUserFail(dispatch)
    }
};

export const createUserFail = (dispatch) => {
    dispatch({ type: CREATE_USER_FAIL })
};

export const createUserSuccess = (dispatch, user) => {
    dispatch({
        type: CREATE_USER_SUCCESS,
        payload: user
    })
};