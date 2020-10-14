import { 
  INBOX_LIST,
  INBOX_DETAIL
} from '../actions/inbox';
import { ActionStatusTypeValues } from '../../constants/actionStatusTypes';

const initialState = {
  inboxlist:[],
  inboxDetail:null,
  inboxListStatus: null,
  inboxListErrorMessage:null,
  inboxDetailStatus:null,
  inboxDetailErrorMessage:null
};

export default (state = initialState, action) => {
  const { type, payload, status } = action;
  switch (action.type) {
    case INBOX_LIST:
      if (status === ActionStatusTypeValues.COMPLETED) {
        return {
          ...state,
          inboxlist:action.inboxlist,
          inboxListStatus: action.inboxListStatus,
          inboxListErrorMessage: action.inboxListErrorMessage,
        };
      }
      break;
      case INBOX_DETAIL:
        if (status === ActionStatusTypeValues.COMPLETED) {
          return {
            ...state,
            inboxDetail:action.inboxDetail,
            inboxDetailStatus: action.inboxDetailStatus,
            inboxDetailErrorMessage: action.inboxDetailErrorMessage,
          };
        }
        break;
    default:
      return state;
  }
  return state;
};
