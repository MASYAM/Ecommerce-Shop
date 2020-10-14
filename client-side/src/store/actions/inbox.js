import { AsyncStorage } from 'react-native';
import { Actions  } from 'react-native-router-flux';
import { ActionStatusTypeValues } from '../../constants/actionStatusTypes';
import { EnvValues } from '../../constants';

export const INBOX_LIST = 'INBOX_LIST';
export const INBOX_DETAIL = 'INBOX_DETAIL';

let timer;

export const authenticate = (userId, token) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, token: token });
  };
};

export const getInboxMessageList = (viewId) => {
  return async (dispatch, getState) => {
    dispatch({
      type: INBOX_LIST,
      status: ActionStatusTypeValues.STARTED,
      viewId,
      payload: {}
    });
    const token = getState().auth.token;
    if ( !token) {
      console.warn("Missing required parameters." , {token});
      dispatch({
        type: INBOX_LIST,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {error: new Error("Missing required parameters."), token}
      });
      return;
    }
    const finalURL = EnvValues.API_PATH + 'inbox/list';
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
            type: INBOX_LIST,
            status: ActionStatusTypeValues.ERROR,
            viewId,
            payload: {token, error: resData}
          });
          return;
    }
    if (!response.ok) {
      dispatch({
        type: INBOX_LIST,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {token, error: resData}
      });
      return;
    }
    dispatch({ 
      type: INBOX_LIST, 
      viewId,
      status: ActionStatusTypeValues.COMPLETED, 
      payload: { },
      inboxlist: resData.result.inboxlist,
      inboxListStatus: resData.result.status,
      inboxListErrorMessage: resData.result.error
    });
  };
};

export const getInboxDetail = (viewId, id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: INBOX_DETAIL,
      status: ActionStatusTypeValues.STARTED,
      viewId,
      payload: {}
    });
    const token = getState().auth.token;
    if ( !token) {
      console.warn("Missing required parameters." , {token});
      dispatch({
        type: INBOX_DETAIL,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {error: new Error("Missing required parameters."), token}
      });
      return;
    }
    const finalURL = EnvValues.API_PATH + 'inbox/detail/'+id;
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
            type: INBOX_DETAIL,
            status: ActionStatusTypeValues.ERROR,
            viewId,
            payload: {token, error: resData}
          });
          return;
    }
    if (!response.ok) {
      dispatch({
        type: INBOX_DETAIL,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {token, error: resData}
      });
      return;
    }
    dispatch({ 
      type: INBOX_DETAIL, 
      viewId,
      status: ActionStatusTypeValues.COMPLETED, 
      payload: { },
      inboxDetail: resData.result.inboxDetail,
      inboxDetailStatus: resData.result.status,
      inboxDetailErrorMessage: resData.result.error
    });
  };
};