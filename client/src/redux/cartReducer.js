import axios from 'axios';

/* action name creator */
const reducerName = 'cart';
const createActionName = (name) => `app/${reducerName}/${name}`;

/* ACTION TYPES */

export const CART_ADD_ITEM = createActionName('CART_ADD_ITEM');
export const CART_REMOVE_ITEM = createActionName('CART_REMOVE_ITEM');

/* action creators */

export const cartAddItem = (payload) => ({
  payload,
  type: CART_ADD_ITEM,
});

export const cartRemoveItem = (payload) => ({
  payload,
  type: CART_REMOVE_ITEM,
});

/** Thunks */
export const addItem = (id, qty) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/api/products/${id}
      `);
      dispatch(
        cartAddItem({
          product: data._id,
          name: data.name,
          image: data.image,
          price: data.price,
          countInStock: data.countInStock,
          qty,
        })
      );
      localStorage.setItem(
        'cartItems',
        JSON.stringify(getState().cart.cartItems)
      );
    } catch (err) {
      console.log(err);
    }
  };
};

/* reducer */

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return { loading: false, cartItems: action.payload };

    default:
      return state;
  }
};
