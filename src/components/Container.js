import React from 'react'
import 'twin.macro'

export default function Container ({ children }) {
  return (
    <div tw='flex flex-col bg-white max-width[500px] min-width[500px] ml-40 my-16 pt-10 border border-red-800'>
      {children}
    </div>
  )
}
