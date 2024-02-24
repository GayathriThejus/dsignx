import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
//import { getOrderStatus } from '../lib/helpers'

const recentData = [
	{
        id:'1',
		name: 'Gayathri Thejus',
        purpose:'req for authorisation',
        status:'not signed',
        content:'.jpg',
        date:'2023-12-3'
		
	},
	
]

export default function Dashboard() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<h1 className="text-gray-700 font-medium mx-auto mb-[100px] text-2xl">Authorise Admin Panel</h1>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700 bg-slate-200">
					<thead>
						<tr className='mx-auto py-10'>
							<th>ID</th>
							<th>Name</th>
							<th>Purpose</th>
							<th>Status</th>
							<th>content</th>
							<th>Published on</th>
							
						</tr>
					</thead>
					<tbody>
						{recentData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/product/${order.name}`}>#{order.name}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.purpose}`}>{order.purpose}</Link>
								</td>
								{/* <td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td> */}
								
								<td>{order.status}</td>
                                <td>
									<Link to={`/customer/${order.content}`}>{order.content}</Link>
								</td>
								{/* <td>{getOrderStatus(order.current_order_status)}</td> */}
                                <td>{order.date}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}