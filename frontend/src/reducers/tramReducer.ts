import { createSlice } from "@reduxjs/toolkit";

import { addTripHelper, removeTripHelper, setStopHelper } from "./reducerHelper";
import { IStop } from "../types/api-interfaces";

// will be overridden in the beginning of rendering
const initialState: IStop = {
    id: "hi",
    gtfsId: "null",
    name: "null",
    code: "null",
    trips: []
};

const tramSlice = createSlice({
    name: "tram",
    initialState,
    reducers: {
        addTram: addTripHelper, 
        removeTram: removeTripHelper,
        setTram: setStopHelper
    }
});


export const { addTram, removeTram, setTram } = tramSlice.actions;
export default tramSlice.reducer;
