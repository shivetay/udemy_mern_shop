import axios from 'axios';

/* action name creator */
const reducerName = 'product';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* ACTION TYPES */

export const USER_LOGIN_REQUEST = createActionName('USER_LOGIN_REQUEST');
export const USER_LOGIN_SUCCESS = createActionName('USER_LOGIN_SUCCESS');
export const USER_LOGIN_FAIL = createActionName('USER_LOGIN_FAIL');
export const USER_LOGOUT = createActionName('USER_LOGOUT');

/* action creators */

export const userLoginReq = (payload) => ({
  payload,
  type: USER_LOGIN_REQUEST,
});

export const userLoginSuccess = (payload) => ({
  payload,
  type: USER_LOGIN_SUCCESS,
});

export const userLoginFail = (payload) => ({
  payload,
  type: USER_LOGIN_FAIL,
});

export const userLogout = (payload) => ({
  payload,
  type: USER_LOGOUT,
});

/* tunks */
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.post(
        `/api/users/login`,
        { email, password },
        config
      );
      dispatch(userLoginReq({ name: USER_LOGIN_REQUEST }));
      dispatch(userLoginSuccess({ payload: data, name: USER_LOGIN_SUCCESS }));
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (err) {
      dispatch(userLoginFail({ payload: err, name: USER_LOGIN_FAIL }));
    }
  };
};

/* reducer */

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
