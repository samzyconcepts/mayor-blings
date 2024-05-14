import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const { id, quantity } = action.payload;

            const existingItem = state.items.find((item) => item.id === id);

            if (existingItem) {
                //if the item already exists in the cart
                existingItem.quantity += quantity;
            } else {
                //else push new item into the array of items
                state.items.push(action.payload);
            }
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        updateItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const { id, quantity } = action.payload;

            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
