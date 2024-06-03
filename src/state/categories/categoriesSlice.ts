import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getCategoriesURL } from "../../util/api";

interface Category {
    id: number;
    category_name: string;
    category_description: string;
    category_image: string;
    created_at: string;
    updated_at: string;
}

interface CategoriesState {
    categories: Category[];
}

const initialState: CategoriesState = {
    categories: [],
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getCategoriesAsync.fulfilled, (state, action: PayloadAction<[]>) => {
            return { ...state, categories: action.payload };
        });
    },
});

export const getCategoriesAsync = createAsyncThunk("categories/getCategoriesAsync", async () => {
    const res = await axios.get(`${getCategoriesURL()}`);
    const categories = await res.data;
    console.log(categories)
    return categories;
});

export default categoriesSlice.reducer;
