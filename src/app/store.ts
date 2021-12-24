import { configureStore } from "@reduxjs/toolkit"
import reservationReducer from "../features/reservationSlice"
import customerReducer from "../features/customerSlice"

export const store = configureStore({
	reducer: {
		reservations: reservationReducer,
		customers: customerReducer,
	},
})

// store.subscribe(() =>
// 	console.log(`store log customers: ${store.getState().customers.customers}`)
// )
// store.subscribe(() =>
// 	console.log(
// 		`store log reservations: ${store.getState().reservations.reservations}`
// 	)
// )

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
