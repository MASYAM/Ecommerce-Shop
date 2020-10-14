import { 
  PROFILE_LIST
} from '../actions/profile';
import { ActionStatusTypeValues } from '../../constants/actionStatusTypes';

const initialState = {
  recentProductList:[],
  ownedItemList:[],
  profileViewStatus: null,
  profileViewErrorMessage:null
};

export default (state = initialState, action) => {
  const { type, payload, status } = action;
  switch (action.type) {
    case PROFILE_LIST:
      if (status === ActionStatusTypeValues.COMPLETED) {
        return {
          ...state,
          recentProductList:action.recentProductList,
          ownedItemList:action.ownedItemList,
          profileViewStatus: action.profileViewStatus,
          profileViewErrorMessage: action.profileViewErrorMessage,
        };
      }
      break;
    default:
      return state;
  }
  return state;
};
