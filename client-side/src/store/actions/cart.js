import { AsyncStorage } from 'react-native';
import { Actions  } from 'react-native-router-flux';
import { ActionStatusTypeValues } from '../../constants/actionStatusTypes';
import { EnvValues } from '../../constants';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CLEAR_CART = 'CLEAR_CART';

let timer;

let shopppingCartId = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
}

export const addToCart = (viewId, id, image, name, color, size, price) => {
  return async (dispatch, getState) => {
    dispatch({
      type: ADD_TO_CART,
      status: ActionStatusTypeValues.STARTED,
      viewId,
      payload: {}
    });

    const cartListing = getState().cart.cartListing;
    console.log('addToCart   CHECK POINT!!!!!');
    console.log(cartListing);

    cartListing.push({
      id:shopppingCartId(),
      productId:id, image, name, color, size, price
    });

    dispatch({ 
      type: ADD_TO_CART, 
      viewId,
      status: ActionStatusTypeValues.COMPLETED, 
      payload: { },
      cartListing: cartListing
    });
  };
};

export const removeCart = (viewId, id ) => {
  return async (dispatch, getState) => {
    dispatch({
      type: REMOVE_FROM_CART,
      status: ActionStatusTypeValues.STARTED,
      viewId,
      payload: {}
    });

    const cartListing = getState().cart.cartListing;

    var newCartList = cartListing.filter(x => {
      return x.id != id;
    })

    dispatch({ 
      type: REMOVE_FROM_CART, 
      viewId,
      status: ActionStatusTypeValues.COMPLETED, 
      payload: { },
      cartListing: newCartList
    });
  };
};

export const clearCart = (viewId ) => {
  return async (dispatch, getState) => {
    dispatch({
      type: CLEAR_CART,
      status: ActionStatusTypeValues.STARTED,
      viewId,
      payload: {}
    });

    dispatch({ 
      type: CLEAR_CART, 
      viewId,
      status: ActionStatusTypeValues.COMPLETED, 
      payload: { },
      cartListing:[]
    });
  };
};
