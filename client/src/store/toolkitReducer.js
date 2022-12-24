import {createSlice} from "@reduxjs/toolkit";

const cartReducer = createSlice({
    name: "cart", initialState: {
        products: [],
        auth: false,
        userSignIn: {},
    }, reducers: {
        addInCart(state, action) {
            state.products.push({...action.payload, count: 1});
        },
        increment(state, action) {
            const item = state.products.find(i => i.id === action.payload.id);
            item.count++;
        },
        decrement(state, action) {
            const item = state.products.find(i => i.id === action.payload.id);
            if (item.count === 1) {
                item.count = 1
            } else {
                item.count--;
            }
        },
        removeItem(state, action) {
            const removeItem = state.products.filter(p => p.id !== action.payload.id)
            state.products = removeItem;
        },
        userAuth(state, action) {
            state.auth = action.payload;
        },
        setUser(state, action) {
            state.userSignIn = action.payload;
        }
    }
})

export const reducer = cartReducer.reducer
export const {addInCart, increment, decrement, removeItem, userAuth, setUser} = cartReducer.actions