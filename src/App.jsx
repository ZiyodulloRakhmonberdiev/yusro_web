import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import { SidebarProvider } from './context/SidebarContext';
import ScrollToTop from './helpers/ScrollToTop';

function App() {

  const routes = Routes();

  return (
    <SidebarProvider>
      <RouterProvider router={routes}>
      <ScrollToTop />
      </RouterProvider>
    </SidebarProvider>
  );
}

export default App;
