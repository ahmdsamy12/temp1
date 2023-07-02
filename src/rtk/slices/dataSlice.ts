
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface person {
    name: string,
    id: number
}

interface personState {
    persons: person[]
}

const initialState: personState = {
    persons: []
}

export const dataSlice = createSlice({
    name: "dataSlice",
    initialState,
    reducers: {
        handle: (state,action: PayloadAction<{name: string}>) => {

        },
        bandle: (state, action) => {

        }
    }
})


export const {handle, bandle} = dataSlice.actions;

export default dataSlice.reducer;