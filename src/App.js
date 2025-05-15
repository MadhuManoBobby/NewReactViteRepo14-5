import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddCustomer } from './AddCustomer'
import { Provider } from 'react-redux'
import { Store } from './Store'
import { ViewComponent } from './ViewComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={Store} basename="/NewReactViteRepo14-5/">
      <h2>React-Redux Add Customer</h2>
      <AddCustomer/>
      <ViewComponent/>
      </Provider>
    </>
  )
}

export default App
