import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Customer, CustomerState, Order } from "../app/models/customer"

const initialState: CustomerState = {
	customers: [],
}

export const customerSlice = createSlice({
	name: "customers",
	initialState,
	reducers: {
		addCustomer: (state, action: PayloadAction<Customer>) => {
			console.log(`action.payload: ${action.payload}`)
			state.customers.push(action.payload)
		},
		addOrderToCustomer: (state, action: PayloadAction<Order>) => {
			state.customers.forEach(customer => {
				if (customer.id === action.payload.customerId) {
					customer.orders.push(action.payload)
				}
			})
		},
		removeCustomer: (state, action: PayloadAction<{ id: string }>) => {
			state.customers = state.customers.filter(
				customer => customer.id !== action.payload.id
			)
		},
		removeOrderFromCustomer: (state, action: PayloadAction<Order>) => {
			state.customers.forEach(customer => {
				if (customer.id === action.payload.customerId) {
					customer.orders = customer.orders.filter(
						order => order !== action.payload
					)
				}
			})
		},
	},
})

export const {
	addCustomer,
	addOrderToCustomer,
	removeCustomer,
	removeOrderFromCustomer,
} = customerSlice.actions

export default customerSlice.reducer
