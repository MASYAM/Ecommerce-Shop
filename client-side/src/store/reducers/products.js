import { 
  HOME_PAGE_BANNER,
  PRODUCT_DETAIL,
  PRODUCT_CATEGORIES
} from '../actions/products';
import { ActionStatusTypeValues } from '../../constants/actionStatusTypes';

const initialState = {
  productDetail:null,
  productDetailStatus:null,
  productDetailErrorMessage: null,
  homeBanner: [],
  homeBannerStatus:null,
  homeBannerErrorMessage: null,
  designerCollectionList:[],
  holidaySaleList:[],
  topTrendsList:[],
  //Product Categories
  alineDress: [],
  tentDress: [],
  yokeDress: [],
  empireLineDress:[],
  shiftDress: [],
  productCatStatus: null,
  productCatErrorMessage: null
};

export default (state = initialState, action) => {
  const { type, payload, status } = action;
  switch (action.type) {
    case PRODUCT_CATEGORIES:
      if (status === ActionStatusTypeValues.COMPLETED) {
        return {
          ...state,
         
          alineDress: action.alineDress,
          tentDress: action.tentDress,
          yokeDress:action.yokeDress,
          empireLineDress:action.empireLineDress,
          shiftDress:action.shiftDress,
          productCatStatus: action.productCatStatus,
          productCatErrorMessage: action.productCatErrorMessage,
        };
      }
      break;
      case HOME_PAGE_BANNER:
      if (status === ActionStatusTypeValues.COMPLETED) {
        return {
          ...state,
          homeBanner: action.homeBanner,
          designerCollectionList: action.designerCollectionList,
          holidaySaleList:action.holidaySaleList,
          topTrendsList:action.topTrendsList,
          homeBannerStatus: action.homeBannerStatus,
          homeBannerErrorMessage: action.homeBannerErrorMessage,
        };
      }
      break;
      case PRODUCT_DETAIL:
        if (status === ActionStatusTypeValues.COMPLETED) {
          return {
            ...state,
            productDetail:action.productDetail,
            productDetailStatus: action.productDetailStatus,
            productDetailErrorMessage: action.productDetailErrorMessage,
          };
        }
        break;
    default:
      return state;
  }
  return state;
};
