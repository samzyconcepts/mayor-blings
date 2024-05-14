import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer, { getCategoriesAsync } from "./categories/categoriesSlice";
import productsReducer, { getProductsAsync } from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
        cart: cartReducer,
    },
});

store.dispatch(getCategoriesAsync());
store.dispatch(getProductsAsync());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
