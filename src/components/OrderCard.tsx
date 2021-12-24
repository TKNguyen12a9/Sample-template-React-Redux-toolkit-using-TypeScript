import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Order } from "../app/models/customer"
import { removeOrderFromCustomer } from "../features/customerSlice"

interface OrderProps {
	id: string
	order: string
	customerId: string
}

export default function OrderCard(props: OrderProps) {
	const dispatch = useDispatch()
	const [order, setOrder] = useState<Order>(props)

	const handleDeleteOrder = () => {
		dispatch(removeOrderFromCustomer(order))
		setOrder({ id: "", order: "", customerId: "" })
	}

	return (
		<div>
			<p onClick={handleDeleteOrder}>{order.order}</p>
		</div>
	)
}
