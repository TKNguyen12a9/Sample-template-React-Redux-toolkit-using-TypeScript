// interface Customer {
// 	id: string
// 	name: string
// 	orders: string[]
// }

interface Customer {
	id: string
	name: string
	orders: Order[]
}

interface CustomerState {
	customers: Customer[]
}

interface Order {
	id: string
	order: string
	customerId: string
}

export type { Customer, CustomerState, Order }
