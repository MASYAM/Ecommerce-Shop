import { AsyncStorage } from 'react-native';
import { Actions  } from 'react-native-router-flux';
import { ActionStatusTypeValues } from '../../constants/actionStatusTypes';
import { EnvValues } from '../../constants';

export const PROFILE_LIST = 'PROFILE_LIST';

let timer;

export const authenticate = (userId, token) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, token: token });
  };
};

export const getProfileViewList = (viewId) => {
  return async (dispatch, getState) => {
    dispatch({
      type: PROFILE_LIST,
      status: ActionStatusTypeValues.STARTED,
      viewId,
      payload: {}
    });
    const token = getState().auth.token;
    if ( !token) {
      console.warn("Missing required parameters." , {token});
      dispatch({
        type: PROFILE_LIST,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {error: new Error("Missing required parameters."), token}
      });
      return;
    }
    const finalURL = EnvValues.API_PATH + 'profile/info';
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
                  'token':token
                })
              }
            );
      resData = await response.json();
    } catch (error ) {
          dispatch({
            type: PROFILE_LIST,
            status: ActionStatusTypeValues.ERROR,
            viewId,
            payload: {token, error: resData}
          });
          return;
    }
    if (!response.ok) {
      dispatch({
        type: PROFILE_LIST,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {token, error: resData}
      });
      return;
    }
    dispatch({ 
      type: PROFILE_LIST, 
      viewId,
      status: ActionStatusTypeValues.COMPLETED, 
      payload: { },
      recentProductList: resData.result.recentProductList,
      ownedItemList: resData.result.ownedItemList,
      profileViewStatus: resData.result.status,
      profileViewErrorMessage: resData.result.error
    });
  };
};
