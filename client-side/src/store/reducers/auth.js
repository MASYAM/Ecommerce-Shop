import { 
  REGISTER_ACCOUNT, 
  LOGIN_ACCOUNT,
  CHECK_LOGIN,
  LOGOUT 
} from '../actions/auth';
import { ActionStatusTypeValues } from '../../constants/actionStatusTypes';

const initialState = {
  token: null,
  registerStatus: null,
  registerErrorMessage: null,
  loginStatus:null,
  loginProfile:null,
  loginErrorMessage: null
};

export default (state = initialState, action) => {
  const { type, payload, status } = action;
  switch (action.type) {
    case REGISTER_ACCOUNT:
      if (status === ActionStatusTypeValues.COMPLETED) {
        return {
          ...state,
          registerStatus: action.registerStatus,
          registerErrorMessage: action.registerErrorMessage,
        };
      }
      break;
      case LOGIN_ACCOUNT:
        if (status === ActionStatusTypeValues.COMPLETED) {
          return {
            ...state,
            loginStatus: action.loginStatus,
            loginProfile: action.loginProfile,
            loginErrorMessage: action.loginErrorMessage,
            token: action.token
          };
        }
        break;
        case CHECK_LOGIN:
        if (status === ActionStatusTypeValues.COMPLETED) {
          return {
            ...state,
            token: action.token,
            loginProfile: action.loginProfile,
          };
        }
        break;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
  return state;
};
