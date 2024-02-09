import React from 'react'

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './components/Login';
import Home from './components/Home';
import Analytics from './components/Analytics';

const App = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />

        },
        {
            path: '/home',
            element: <Home />

        },{
            path: "/analytics",
            element: <Analytics/>
        }
    ])


  return (

        <div>
            <RouterProvider router={appRouter}>

            </RouterProvider>
        </div>
    
  )
}

export default App;