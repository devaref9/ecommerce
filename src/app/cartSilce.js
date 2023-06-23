import { createSlice } from "@reduxjs/toolkit";

const isItemExisted = (state, cartItem) => {
  return state.find((item) => item.id === cartItem.id);
};

const CalcTotal = (cart) => {
  const newCartTotal = cart.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.qty,
    0
  );
  return parseFloat(newCartTotal).toFixed(2);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: [],
    total: 0,
  },
  reducers: {
    addItemToCart: (state, { payload }) => {
      if (!isItemExisted(state.value, payload)) {
        state.value = [...state.value, { ...payload, qty: 1 }];
        state.total = CalcTotal(state.value);
      }
    },
    removeItemFromCart: (state, { payload }) => {
      if (isItemExisted(state.value, payload)) {
        const currentCart = state.value.filter(
          (item) => item.id !== payload.id
        );
        state.value = currentCart;
        state.total = CalcTotal(state.value);
      }
    },
    increamentItemQty: (state, { payload }) => {
      if (isItemExisted(state.value, payload)) {
        const newCart = state.value.map((item) => {
          return item.id === payload.id ? { ...item, qty: item.qty + 1 } : item;
        });
        state.value = newCart;
        state.total = CalcTotal(state.value);
      }
    },
    decreamentItemQty: (state, { payload }) => {
      if (isItemExisted(state.value, payload)) {
        const newCart = state.value.map((item) => {
          return item.id === payload.id
            ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
            : item;
        });
        state.value = newCart;
        state.total = CalcTotal(state.value);
      }
    },
  },
});

export const isItemInCart = (state, id) => {
  const isExisted = state.find((item) => item.id === id);
  if (isExisted) return true;
  return false;
};

export const {
  addItemToCart,
  removeItemFromCart,
  increamentItemQty,
  decreamentItemQty,
} = cartSlice.actions;

export default cartSlice.reducer;
