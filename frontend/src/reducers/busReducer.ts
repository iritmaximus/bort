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

const busSlice = createSlice({
    name: "bus",
    initialState,
    reducers: {
        addBus: addTripHelper, 
        removeBus: removeTripHelper,
        setBus: setStopHelper
    }
});


export const { addBus, removeBus, setBus } = busSlice.actions;
export default busSlice.reducer;
