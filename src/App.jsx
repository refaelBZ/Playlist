import React from 'react'
import Layout from './Layout'
import { BrowserRouter } from 'react-router-dom'
export default function () {
  return (
    <BrowserRouter>
    <div>
      <Layout/>
    </div>
    </BrowserRouter>
  )
}
