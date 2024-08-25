import React from 'react'
import { store } from './Store'
import { Provider } from 'react-redux'

const ContextProvider = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default ContextProvider