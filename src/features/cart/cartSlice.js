import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hidden: true,
  cart: [],
  cartItems: 0,
  totalQuantity: 0,
  totalPrice: 0,
};
const getCartTotal = (state) => {
  let { totalQuantity, totalPrice } = state.cart.reduce(
    (cartTotal, cartItem) => {
      const { price, quantity } = cartItem;
      const itemTotal = price * quantity;
      cartTotal.totalPrice += itemTotal;
      cartTotal.totalQuantity += quantity;
      return cartTotal;
    },
    {
      totalPrice: 0,
      totalQuantity: 0,
    }
  );
  state.totalPrice = parseInt(totalPrice.toFixed(2));
  state.totalQuantity = totalQuantity;
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeAll: (state) => {
      state.cartItems = 0;
      state.cart = [];
      state.totalPrice = 0;
    },
    addToCart(state, action) {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
        getCartTotal(state);
      } else {
        state.cart.push(action.payload);
        getCartTotal(state);
      }
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      getCartTotal(state);
    },
    increaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      getCartTotal(state);
    },
    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      getCartTotal(state);
    },
    showCart: (state) => {
      state.hidden = !state.hidden;
    },
  },
});
export const {
  showCart,
  addToCart,
  removeAll,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
