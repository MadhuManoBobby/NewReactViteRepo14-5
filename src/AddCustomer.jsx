import React, { useEffect, useRef, useState } from 'react'
import { ViewComponent } from './ViewComponent'
import { useDispatch } from 'react-redux'
import { addCustomer as addCustomerAction } from './Slice/CustomerSlice'

export const AddCustomer = () => {
    const [input,setInput] = useState('')
    // const [customer,setCustomer] = useState([])
    const dispatch = useDispatch();
    const inputFocus = useRef(null)

    useEffect(() => {
        inputFocus.current.focus()
    })

    const addCustomer = () => {
        
        
        if(input){
            dispatch(addCustomerAction(input))
            // setCustomer(prestate => [...prestate,input])
            setInput('');
        }
    }


  return (
    <div>
        <input type="text" ref={inputFocus} value={input} onChange={e => setInput(e.target.value)}/>
        <button onClick={addCustomer}>Add</button>
        {/* <ViewComponent customer={customer}/> */}
    </div>
  )
}
