import React from 'react'
import { GlobalStyles } from 'twin.macro'

const Layout = ({ children, ...rest }) => (
    <div tw='flex overflow-hidden h-screen' {...rest}>
        <GlobalStyles />
        {children}
    </div>
)

export default Layout
