import React, { ChangeEvent, useState } from "react"
import { addOrderToCustomer } from "../features/customerSlice"
import { useDispatch } from "react-redux"
import { Order } from "../app/models/customer"
import { v4 as uuid } from "uuid"
import OrderCard from "./OrderCard"

interface CustomerProps {
	id: string
	name: string
	orders: Order[]
}

export const CustomerCard = ({ id, name, orders }: CustomerProps) => {
	const [orderInput, setOrderInput] = useState<Order>({
		id: "",
		order: "",
		customerId: "",
	})

	const dispatch = useDispatch()

	const handleCusomterCardChanges = (e: ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setOrderInput({
			id: "or" + uuid(),
			order: e.target.value,
			customerId: id,
		})
	}

	const handleAddOrder = () => {
		dispatch(addOrderToCustomer(orderInput))
		console.log(`orderInput: ${orderInput.id}/${orderInput.order}`)
		setOrderInput({ id: "", order: "", customerId: "" })
	}

	return (
		<div className="customer-food-card-container">
			<h5>{name}</h5>
			<div className="customer-foods-container">
				<div className="customer-food">
					{orders.map(order => (
						<OrderCard
							key={order.id}
							id={order.id}
							order={order.order}
							customerId={order.customerId}
						/>
					))}
				</div>
				<div className="customer-food-input-container">
					<input
						value={orderInput.order}
						onChange={handleCusomterCardChanges}
					/>
					<button onClick={handleAddOrder}>Add</button>
				</div>
			</div>
		</div>
	)
}
