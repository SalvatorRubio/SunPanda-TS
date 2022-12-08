import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeProduct = {
  name: string;
  price: number;
  img: string;
  oneProductPrice: number;
  lengthProducts: number;
};

type TypeRestaurant = {
  cityName: string;
  cityEngName: string;
  shopName: string;
  cartProducts: TypeProduct[];
  costDelivery: number;
  totalCost: number;
  freeDeliveryPrice: number;
  status: boolean;
  deliveryMethod: string;
};

const initialState: TypeRestaurant = {
  cityName: "",
  cityEngName: "",
  shopName: "",
  cartProducts: [],
  costDelivery: 100,
  totalCost: 0,
  freeDeliveryPrice: 1000,
  status: true,
  deliveryMethod: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCityName(state, action: PayloadAction<string>) {
      state.cityName = action.payload;
    },
    setCityEngName(state, action: PayloadAction<string>) {
      state.cityEngName = action.payload;
    },
    setShopName(state, action: PayloadAction<string>) {
      state.shopName = action.payload;
    },
    setDeliveryMethod(state, action: PayloadAction<string>) {
      state.deliveryMethod = action.payload;
    },
    setCostDelivery(state, action: PayloadAction<number>) {
      state.costDelivery = action.payload;
    },
    addProduct(state, action: PayloadAction<TypeProduct>) {
      state.cartProducts = [...state.cartProducts, action.payload];
    },
    setFreeDeliveryPrice(state, action: PayloadAction<number>) {
      state.freeDeliveryPrice = action.payload;
    },
    setStatus(state, action: PayloadAction<boolean>) {
      state.status = action.payload;
    },
    incrementProduct(state, action: PayloadAction<number>) {
      state.cartProducts = state.cartProducts.map((item, idx) => {
        if (action.payload === idx) {
          return {
            ...item,
            price: item.price + item.oneProductPrice,
            lengthProducts: item.lengthProducts + 1,
          };
        }
        return item;
      });
      setTotalCost();
    },
    decrementProduct(state, action: PayloadAction<number>) {
      state.cartProducts = state.cartProducts.map((item, idx) => {
        if (action.payload === idx && item.lengthProducts > 1) {
          return {
            ...item,
            price: item.price - item.oneProductPrice,
            lengthProducts: item.lengthProducts - 1,
          };
        }
        return item;
      });
      setTotalCost();
    },
    removeProduct(state, action: PayloadAction<number>) {
      let price = 0;
      state.cartProducts.map((item, idx) => {
        if (action.payload === idx) {
          price = item.price;
        }
        return price;
      });
      state.totalCost = state.totalCost - price;
      state.cartProducts = state.cartProducts.filter(
        (item, index) => index !== action.payload
      );
    },
    setTotalCost(state) {
      let total = 0;
      if (state.cartProducts.length) {
        state.cartProducts.map(({ price }) => (total += price));
        if (total < state.freeDeliveryPrice) {
          state.totalCost = total + state.costDelivery;
          if (state.deliveryMethod === "Навынос") {
            state.totalCost = total;
          }
        } else {
          state.totalCost = total;
        }
      } else {
        state.totalCost = 0;
      }
    },
    clearCartState() {
      return initialState;
    },
  },
});

export const {
  setCityName,
  setShopName,
  addProduct,
  removeProduct,
  setCostDelivery,
  setDeliveryMethod,
  setCityEngName,
  clearCartState,
  setTotalCost,
  incrementProduct,
  decrementProduct,
  setFreeDeliveryPrice,
  setStatus,
} = cartSlice.actions;

export default cartSlice.reducer;
