import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal: (state) => {
            state.value = true
        },
        hideModal: (state) => {
            state.value = false
        },
        resetModal: (state) => {
            state = initialState
        }
    }
});

export const { 
    showModal, 
    hideModal,
    resetModal,
} = modalSlice.actions;

export default modalSlice.reducer

