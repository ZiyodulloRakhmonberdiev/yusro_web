import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
import { SidebarProvider } from './context/SidebarContext';

function App() {

  const routes = Routes()

  return (
    <div>
      <SidebarProvider>
        <RouterProvider router={routes} />
      </SidebarProvider>
    </div>
  )
}

export default App