import React from 'react'
import { Link } from 'react-router-dom'


const recentData = [
	{
        id:'1',
		name: 'Gayathri Thejus',
        
        status:'not signed',
        content:'.jpg',
        date:'2023-12-3'
		
	},
]
const Admin = () => {

  return (
    <div className='text-black'>
    <div className='max-h-[200px]'>
        <div className='text-black bg-slate-100 px-4 py-5 flex justify-between items-centre mx-auto w-full h-24'>
        <h1 className=' w-full text-3xl font-bold text-[#090909] ml-10'>Authorise.</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Manage </li>
            <li className='p-4'>Dashboard</li>
            <li className='p-4'>Pending</li>
           
        </ul>
        </div>
    </div>

    <div className='mx-auto'>
        <div className='h-[100px] w-full border border-b-gray-300'>
    <h1 className='flex justify-center text-center text-2xl text-green-700 font-bold mt-[40px]'>Authoriser Dashboard</h1></div>
    <div className='flex justify-center max-w-[1400px] mt-[30px]'>
    <table className="w-full text-gray-700 bg-lime-100 ml-[100px]">
					<thead className='mb-[30px] '>
						<tr className='mx-auto'>
							<th>ID</th>
							<th>Name</th>
							
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

    </div>
  )
}

export default Admin
