import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer } from './Slice/CustomerSlice'


export const ViewComponent = (props) => {
    // const {customer} = props
    const customers = useSelector(state => state.customers)
    const dispatch = useDispatch()


  const removeCustomer = (index) => {
    dispatch(deleteCustomer(index));
  }
  return (
    <div className='view'>
        <h2>Customer List</h2>
        <ul>
            {customers.map((customer,index) => <li>{customer}  <button onClick={() => removeCustomer(index)}>Delete</button></li>)}
        </ul>
    </div>
  )
}
