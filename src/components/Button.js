import React, { Children } from 'react'

export const Button = ({children}) => {
  return (
   <button className="w-64 text-xl text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-lg">{children}</button>
  )
}

