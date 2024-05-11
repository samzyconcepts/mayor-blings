import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer, { getCategoriesAsync } from "./categories/categoriesSlice";
import productsReducer, { getProductsAsync } from "./products/productsSlice"

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        products: productsReducer,
    },
});

store.dispatch(getCategoriesAsync());
store.dispatch( getProductsAsync());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
