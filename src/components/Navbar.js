import React from 'react'
import 'twin.macro'
import NavButton from '../components/NavButton'

export default function Navbar ({ titles }) {
  const buttons = titles.map(title => <NavButton key={title} title={title}>{title}</NavButton>)

  return (
      <navbar tw='pl-4 pb-2 border-b border-black'>
      <li tw='inline'>
          {buttons}
          </li>
    </navbar>
  )
}
