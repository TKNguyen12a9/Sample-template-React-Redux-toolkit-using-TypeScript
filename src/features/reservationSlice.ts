import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ReservationState } from "../app/models/reservation"

const initialState: ReservationState = {
	reservations: [],
}

export const reservationSlice = createSlice({
	name: "reservations",
	initialState,
	reducers: {
		addReservation: (state, action: PayloadAction<string>) => {
			state.reservations.push(action.payload)
		},
		removeReservation: (state, action: PayloadAction<number>) => {
			state.reservations.splice(action.payload, 1)
		},
	},
	// extraReducers: {},
})

export const { addReservation, removeReservation } = reservationSlice.actions

export default reservationSlice.reducer
