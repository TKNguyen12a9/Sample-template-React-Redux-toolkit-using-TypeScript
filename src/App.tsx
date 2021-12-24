import React, { useState } from "react"
import "./App.css"
import { useDispatch } from "react-redux"
import { ReservationCard } from "./components/ReservationCard"
import { addReservation } from "./features/reservationSlice"
import { CustomerCard } from "./components/CustomerCard"
import { useAppSelector } from "./app/hooks"

function App() {
	// TODO: read more about dispatch
	const dispatch = useDispatch()

	const [reservationInput, setReservationInput] = useState("")

	// Method 1:
	// TODO: read more about useSelector
	// const reservations = useSelector(
	// 	(state: RootState) => state.reservations.value
	// )

	// method 2
	const reservations = useAppSelector(
		state => state.reservations.reservations
	)

	const customers = useAppSelector(state => state.customers.customers)

	const handleAddReservation = () => {
		if (!reservationInput) {
			alert("reservation input should not be null!")
			return
		}
		dispatch(addReservation(reservationInput))
		setReservationInput("")
	}

	return (
		<div className="App">
			<div className="container">
				<div className="reservation-container">
					<div>
						<h5 className="reservation-header">Reservations</h5>
						<div className="reservation-cards-container">
							{reservations.map((name, index) => {
								return (
									<ReservationCard
										name={name}
										key={index}
										index={index}
									/>
								)
							})}
						</div>
					</div>
					<div className="reservation-input-container">
						<input
							value={reservationInput}
							onChange={e => {
								setReservationInput(e.target.value)
							}}
						/>
						<button onClick={handleAddReservation}>Add</button>
					</div>
				</div>
				<div className="customer-food-container">
					{customers.map(customer => {
						return (
							<CustomerCard
								id={customer.id}
								name={customer.name}
								orders={customer.orders}
								key={customer.id}
							/>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default App
