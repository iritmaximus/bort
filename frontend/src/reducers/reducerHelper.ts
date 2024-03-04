import { PayloadAction } from "@reduxjs/toolkit";
import { IStop, ITrip } from "../types/api-interfaces";


export const addTripHelper = (state: IStop, action: PayloadAction<ITrip>) => {
    state.trips.push(action.payload);
}

export const removeTripHelper = (_state: IStop, action: PayloadAction<string>) => {
    const id = action.payload;
    return;
}

export const setStopHelper = (_state: IStop, action: PayloadAction<IStop>) => {
    return action.payload;
}

export default { addTripHelper, removeTripHelper, setStopHelper };
