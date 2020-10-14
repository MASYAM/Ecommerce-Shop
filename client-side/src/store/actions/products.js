import { AsyncStorage } from 'react-native';
import { Actions  } from 'react-native-router-flux';
import { ActionStatusTypeValues } from '../../constants/actionStatusTypes';
import { EnvValues } from '../../constants';

export const HOME_PAGE_BANNER = 'HOME_PAGE_BANNER';
export const PRODUCT_DETAIL = 'PRODUCT_DETAIL';
export const PRODUCT_CATEGORIES = 'PRODUCT_CATEGORIES';

let timer;

export const authenticate = (userId, token) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, token: token });
  };
};

export const getProductDetail = (viewId, productId) => {
  return async (dispatch, getState) => {
    dispatch({
      type: PRODUCT_DETAIL,
      status: ActionStatusTypeValues.STARTED,
      viewId,
      payload: {}
    });

    const token = getState().auth.token;
    if ( !token) {
      console.warn("Missing required parameters." , {token});
      dispatch({
        type: PRODUCT_DETAIL,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {error: new Error("Missing required parameters."), token}
      });
      return;
    }

    const finalURL = EnvValues.API_PATH + 'products/detail/'+productId;

    console.log(finalURL);

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
                  'token':token,
                  'id':productId
                })
              }
            );
      resData = await response.json();
    } catch (error ) {
      console.log(error);

          dispatch({
            type: PRODUCT_DETAIL,
            status: ActionStatusTypeValues.ERROR,
            viewId,
            payload: {token, error: resData}
          });
          return;
    }
    if (!response.ok) {
      dispatch({
        type: PRODUCT_DETAIL,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {token, error: resData}
      });
      return;
    }

    dispatch({ 
      type: PRODUCT_DETAIL, 
      viewId,
      status: ActionStatusTypeValues.COMPLETED, 
      payload: { },
      productDetail: resData.result.productDetail,
      productDetailStatus: resData.result.status,
      productDetailErrorMessage: resData.result.error
    });
  };
};

export const getHomePageBanner = (viewId) => {
  return async (dispatch, getState) => {
    dispatch({
      type: HOME_PAGE_BANNER,
      status: ActionStatusTypeValues.STARTED,
      viewId,
      payload: {}
    });

    const token = getState().auth.token;
    console.log("token   >>" + token)

    if ( !token) {
      console.warn("Missing required parameters." , {token});
      dispatch({
        type: HOME_PAGE_BANNER,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {error: new Error("Missing required parameters."), token}
      });
      return;
    }

    const finalURL = EnvValues.API_PATH + 'products/homeBanner';
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
            type: HOME_PAGE_BANNER,
            status: ActionStatusTypeValues.ERROR,
            viewId,
            payload: {token, error: resData}
          });
          return;
    }
    if (!response.ok) {
      dispatch({
        type: HOME_PAGE_BANNER,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {token, error: resData}
      });
      return;
    }

    dispatch({ 
      type: HOME_PAGE_BANNER, 
      viewId,
      status: ActionStatusTypeValues.COMPLETED, 
      payload: { },
      homeBanner: resData.result.homeBanner,
      designerCollectionList: resData.result.designerCollectionList,
      holidaySaleList: resData.result.holidaySaleList,
      topTrendsList: resData.result.topTrendsList,
      homeBannerStatus: resData.result.status,
      homeBannerErrorMessage: resData.result.error
    });
  };
};


export const getCategoriesListing = (viewId) => {
  return async (dispatch, getState) => {
    dispatch({
      type: PRODUCT_CATEGORIES,
      status: ActionStatusTypeValues.STARTED,
      viewId,
      payload: {}
    });
    const token = getState().auth.token;
    if ( !token) {
      console.warn("Missing required parameters." , {token});
      dispatch({
        type: PRODUCT_CATEGORIES,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {error: new Error("Missing required parameters."), token}
      });
      return;
    }
    const finalURL = EnvValues.API_PATH + 'products/cateogries';
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
            type: PRODUCT_CATEGORIES,
            status: ActionStatusTypeValues.ERROR,
            viewId,
            payload: {token, error: resData}
          });
          return;
    }
    if (!response.ok) {
      dispatch({
        type: PRODUCT_CATEGORIES,
        status: ActionStatusTypeValues.ERROR,
        viewId,
        payload: {token, error: resData}
      });
      return;
    }
    dispatch({ 
      type: PRODUCT_CATEGORIES, 
      viewId,
      status: ActionStatusTypeValues.COMPLETED, 
      payload: { },
      alineDress: resData.result.alineDress,
      tentDress: resData.result.tentDress,
      yokeDress: resData.result.yokeDress,
      empireLineDress: resData.result.empireLineDress,
      shiftDress: resData.result.shiftDress,
      productCatStatus: resData.result.status,
      productCatErrorMessage: resData.result.error
    });
  };
};