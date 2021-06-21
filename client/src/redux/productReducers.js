/* action name creator */
const reducerName = 'project';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* ACTION TYPES */

export const PRODUCT_LIST_REQUEST = createActionName('PRODUCT_LIST_REQUEST');
export const PRODUCT_SUCCESS_LIST = createActionName('PRODUCT_SUCCESS_LIST');
export const PRODUCT_FAIL_LIST = createActionName('PRODUCT_FAIL_LIST');

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
