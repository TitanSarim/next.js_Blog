import React from 'react'

import {header} from './'
import Header from './Header'

const Layout = ({children}) => {
  return (
    
    <>

        <Header/>

        {children}

    </>
  )
}

export default Layout