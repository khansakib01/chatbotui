import React from 'react'
import SignUP from './Bot-Component/SignUP'
import { Toaster } from './components/ui/toaster'
import GoogleAuth from './Bot-Component/GoogleAuth'

function Primary() {
  return (
    <div>
      <SignUP/>
      <Toaster/>
    </div>
  )
}

export default Primary
