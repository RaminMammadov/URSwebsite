import React from 'react';
import HeaderMenu from './Components/URStop';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';
import { routArr } from './Routing/Routing';
import URSerrorPage from './Pages/URSerrorPage';
import URSscrollBackToTop from './Components/URSscrollBackToTop';

export default function App() {
  const router = createBrowserRouter(createRoutesFromElements([
    
    <Route
      path={'/'}
      element={<HeaderMenu />}
      errorElement={<URSerrorPage />}

      children={
        routArr.map((item, index) => {
          return <Route

            key={index} 
            path={item.path}
            element={item.component}
          />
        })
        
      }

    />
  ]));

  return (
    <>
      <RouterProvider router={router} />
      <URSscrollBackToTop />
    </>
  )
}

