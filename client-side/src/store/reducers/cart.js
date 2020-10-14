import { 
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART
} from '../actions/cart';
import { ActionStatusTypeValues } from '../../constants/actionStatusTypes';

const initialState = {
  cartListing: []
};

export default (state = initialState, action) => {
  const { type, payload, status } = action;
  switch (action.type) {
    case ADD_TO_CART:
      if (status === ActionStatusTypeValues.COMPLETED) {
        return {
          ...state,
          cartListing:action.cartListing
        };
      }
      break;
    case REMOVE_FROM_CART:
        if (status === ActionStatusTypeValues.COMPLETED) {
          return {
            ...state,
            cartListing:action.cartListing
          };
        }
        break;
    case CLEAR_CART:
          if (status === ActionStatusTypeValues.COMPLETED) {
            return {
              ...state,
              cartListing:action.cartListing
            };
          }
          break;
    default:
      return state;
  }
  return state;
};
