import axios from "axios";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsURL } from "../../util/api";

interface Product {
    id: number;
    name: string;
    description: string;
    image: string[];
    quantity: number;
    price: number;
    category: string;
}
interface productState {
    products: Product[];
}

const initialState: productState = {
    products: [],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getProductsAsync.fulfilled, (state, action: PayloadAction<[]>) => {
            return { ...state, products: action.payload };
        });
    },
});

export const getProductsAsync = createAsyncThunk("products/getProducts", async () => {
    const res = await axios.get(`${getProductsURL()}`);
    const products = await res.data;
    return products;
});

export default productsSlice.reducer;
