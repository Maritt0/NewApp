import { createSlice } from "@reduxjs/toolkit";
import Products from '../../Data/products.json'

export const shopSlice = createSlice({
    name: "Shop",
    initialState: {
        value: {
            genderSelected: "",
            idSelected: "",
            allProducts: Products,
            productsSelected: []
        }
    },
    reducers: {
        setGenreSelected: (state, action) => {
            state.value.productsSelected = state.value.allProducts.filter(product => product.gender === action.payload)
            state.value.genderSelected = action.payload
        },
        setIdSelected: (state, action) => {
            state.value.idSelected = action.payload
        }
    }
})

export const { setGenreSelected, setIdSelected } = shopSlice.actions

export default shopSlice.reducer
