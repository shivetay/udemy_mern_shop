import axios from 'axios';

/* action name creator */
const reducerName = 'project';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* ACTION TYPES */

export const PRODUCT_LIST_REQUEST = createActionName('PRODUCT_LIST_REQUEST');
export const PRODUCT_SUCCESS_LIST = createActionName('PRODUCT_SUCCESS_LIST');
export const PRODUCT_FAIL_LIST = createActionName('PRODUCT_FAIL_LIST');
export const PRODUCT_DETAILS_REQUEST = createActionName(
  'PRODUCT_DETAILS_REQUEST'
);
export const PRODUCT_SUCCESS_DETAILS = createActionName(
  'PRODUCT_SUCCESS_DETAILS'
);
export const PRODUCT_FAIL_DETAILS = createActionName('PRODUCT_FAIL_DETAILS');

/* action creators */

export const getProductList = (payload) => ({
  payload,
  type: PRODUCT_LIST_REQUEST,
});

export const productListSuccess = (payload) => ({
  payload,
  type: PRODUCT_SUCCESS_LIST,
});

export const productListFail = (payload) => ({
  payload,
  type: PRODUCT_FAIL_LIST,
});

export const productDetailsRequest = (payload) => ({
  payload,
  type: PRODUCT_DETAILS_REQUEST,
});
export const productDetailsFail = (payload) => ({
  payload,
  type: PRODUCT_FAIL_DETAILS,
});
export const productDetailsSuccess = (payload) => ({
  payload,
  type: PRODUCT_SUCCESS_DETAILS,
});

/* thunks */
export const listProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products`);
      dispatch(getProductList({ name: PRODUCT_LIST_REQUEST }));
      dispatch(productListSuccess(data));
    } catch (err) {
      dispatch(productListFail({ payload: err, name: PRODUCT_FAIL_LIST }));
    }
  };
};

export const detailsProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}`);
      dispatch(productDetailsRequest({ name: PRODUCT_DETAILS_REQUEST }));
      dispatch(productDetailsSuccess(data));
    } catch (err) {
      dispatch(
        productDetailsFail({ payload: err, name: PRODUCT_FAIL_DETAILS })
      );
    }
  };
};

/* reducer */

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_SUCCESS_LIST:
      return { loading: false, products: action.payload };
    case PRODUCT_FAIL_LIST:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_SUCCESS_DETAILS:
      return { loading: false, product: action.payload };
    case PRODUCT_FAIL_DETAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
