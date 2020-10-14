import { AsyncStorage } from 'react-native';
import { Actions  } from 'react-native-router-flux';
import { ActionStatusTypeValues } from '../../constants/actionStatusTypes';
import { EnvValues } from '../../constants';

export const REGISTER_ACCOUNT = 'REGISTER_ACCOUNT';
export const LOGIN_ACCOUNT = 'LOGIN_ACCOUNT';
export const CHECK_LOGIN = 'CHECK_LOGIN';
export const LOGOUT = 'LOGOUT';

let timer;

export const authenticate = (userId, token) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, token: token });
  };
};

export const registerAccount = (viewId, username, email, password) => {
  return async (dispatch, getState) => {
    dispatch({
      type: REGISTER_ACCOUNT,
      status: ActionStatusTypeValues.STARTED,
      viewId,
      payload: {username, email, password}
    });

    if ( !username || !email|| !password) {
      console.warn("Missing required parameters." , {username, email, password});
      dispatch({
        type: REGISTER_ACCOUNT,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {error: new Error("Missing required parameters."), username, email, password}
      });
      return;
    }
    const finalURL = EnvValues.API_PATH + 'auth/register';
    let resData = null;
    let response = null;
    try {
            response = await  fetch(finalURL,
            {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  'username':username, 
                  'email':email, 
                  'password':password
                })
              }
            );
      resData = await response.json();
    } catch (error ) {
          dispatch({
            type: REGISTER_ACCOUNT,
            status: ActionStatusTypeValues.ERROR,
            viewId,
            payload: {email, error: resData}
          });
          return;
    }
    if (!response.ok) {
      dispatch({
        type: REGISTER_ACCOUNT,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {email, error: resData}
      });
      return;
    }
    dispatch({ 
      type: REGISTER_ACCOUNT, 
      viewId,
      status: ActionStatusTypeValues.COMPLETED, 
      payload: { },
      registerStatus: resData.result.status,
      registerErrorMessage: resData.result.error
    });
  };
};

export const login = (viewId, userEmail, password) => {
  return async (dispatch, getState) => {
    dispatch({
      type: LOGIN_ACCOUNT,
      status: ActionStatusTypeValues.STARTED,
      viewId,
      payload: {userEmail, password}
    });
    if (!userEmail || !password) {
      console.warn("Missing required parameters." , {userEmail, password});
      dispatch({
        type: LOGIN_ACCOUNT,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {error: new Error("Missing required parameters."), userEmail, password}
      });
      return;
    }
    const finalURL = EnvValues.API_PATH + 'auth/login';
    let resData = null;
    let response = null;
    try {
            response = await  fetch(finalURL,
            {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  'email':userEmail, 
                  'password':password
                })
              }
            );
      resData = await response.json();
    } catch (error ) {
          dispatch({
            type: LOGIN_ACCOUNT,
            status: ActionStatusTypeValues.ERROR,
            viewId,
            payload: {email:userEmail, error: resData}
          });
          return;
    }
    if (!response.ok) {
      dispatch({
        type: LOGIN_ACCOUNT,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {email:userEmail, error: resData}
      });
      return;
    }
    const {userProfile, token , status} = resData.result;
    const {userId, username, profilePicture,email,mobile,lastLogonTime} = userProfile;
    if(resData.result.status==="success"){
      //storing information
      saveDataToStorage(token, userId, username, profilePicture,email,mobile,lastLogonTime);
    }
    dispatch({ 
      type: LOGIN_ACCOUNT, 
      viewId,
      status: ActionStatusTypeValues.COMPLETED, 
      payload: { },
      loginStatus: resData.result.status,
      loginProfile: resData.result.userProfile,
      loginErrorMessage: resData.result.error,
      token:token
    });
  };
};

export const checkLogin = (viewId) => {
  return async (dispatch, getState) => {
    dispatch({
      type: CHECK_LOGIN,
      status: ActionStatusTypeValues.STARTED,
      viewId,
      payload: {}
    });

    const userData = await AsyncStorage.getItem('userData');
    if (userData) 
    {
      const transformedData = JSON.parse(userData);
      if (transformedData.token) 
      {
        dispatch({ 
          type: CHECK_LOGIN,
          viewId,
          status: ActionStatusTypeValues.COMPLETED, 
          payload: { },
          token: transformedData.token,
          loginProfile: transformedData,
          loginErrorMessage: null
        });
      }
      else
      {
        dispatch({
          type: CHECK_LOGIN,
          status: ActionStatusTypeValues.ERROR,
          viewId,
          payload: {}
        });
      }
    }
    else
    {
      dispatch({
        type: CHECK_LOGIN,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {}
      });
    }
  };
};




  
















export const logout = (screenName: string = "root") => (dispatch) => {
  clearLogoutTimer();
  AsyncStorage.removeItem('userData');
  Actions.reset(screenName);
  dispatch({ type: LOGOUT });
};

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = expirationTime => {
  return dispatch => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

const saveDataToStorage = (token, userId, username, profilePicture,email,mobile,lastLogonTime) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId,
      username:username,
      profilePicture:profilePicture,
      email:email,
      mobile:mobile,
      lastLogonTime:lastLogonTime
    })
  );
};
