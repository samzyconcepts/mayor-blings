import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    name: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
}

// Function to load cart from localStorage
const loadCart = (): CartState => {
    try {
        const serializedState = localStorage.getItem("cart");

        if (serializedState === null) {
            return { items: [] };
        }

        return JSON.parse(serializedState);
    } catch (error) {
        return { items: [] };
    }
};

// Function to state to the localStorage
const saveState = (state: CartState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("cart", serializedState);
    } catch (err) {
        console.log(err);
    }
};

const initialState: CartState = loadCart();

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

            saveState(state);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            saveState(state);
        },
        updateItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
            const { id, quantity } = action.payload;

            const existingItem = state.items.find((item) => item.id === id);
            if (existingItem) {
                existingItem.quantity = quantity;
            }

            saveState(state);
        },
        clearCart: (state) => {
            state.items = [];

            saveState(state);
        },
    },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
