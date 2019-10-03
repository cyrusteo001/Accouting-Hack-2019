import {
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    CREATE_USER,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL
} from '../actions/types'

const INITIAL_STATE = {
    // user entity
    name: '',
    email: '',
    password: '',

    // not user entity
    loading: false,
    isLoggedIn: false,
    error: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };

        case LOGIN_USER:
            return { ...state, loading: true, error: '' };

        case LOGIN_USER_FAIL:
            return { ...state, error: 'Authentication Failed', pin: '', username: '', loading: false };

        case LOGIN_USER_SUCCESS:
            return { ...state, userID: action.payload, isLoggedIn: true, loading: false };

        case CREATE_USER:
            return { ...state, loading: true, error: '' };

        case CREATE_USER_FAIL:
            return { ...state, error: 'User Registration Failed', pin: '', username: '', loading: false };

        case CREATE_USER_SUCCESS:
            return { ...state, userID: action.payload, isLoggedIn: true, loading: false };

        default:
            return state;
    }
}