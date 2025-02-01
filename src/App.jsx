import { useState } from 'react'
import './App.css'
import { Box } from '@chakra-ui/react'
import Primary from './Primary'
import { Toaster } from './components/ui/toaster'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import SetupOrganization from './Bot-Component/SetupOrganization'
import WebPages from './Bot-Component/WebPages'
import ChatbotIntegration from './Bot-Component/ChatbotIntegration'
import SuccessUI from './Bot-Component/SuccessUI'
import DummySite from './Bot-Component/DummySite'
const router = createBrowserRouter([
  {
    path : '/',
    element:
    <Box>
     <Primary/>
    </Box>
  },
  {
    path:'/setup-organization',
    element:
    <Box>
    <SetupOrganization/>
    <Toaster/>
    </Box>
  },
  {
    path : '/webpages',
    element :<Box> <WebPages/>
      <Toaster/>
    </Box>
  },
  {
    path:'/integration',
    element:
    <Box>
       <ChatbotIntegration/>
       <Toaster/>
    </Box>
  },
  {
    path:'/success',
    element:<SuccessUI/>
  },
  {
    path:"/dummysite",
    element : <DummySite/>
  }
])
function App() {


  return (
    <>
      <RouterProvider router={router}>

      </RouterProvider>
    </>
  )
}

export default App
