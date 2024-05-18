import { createBrowserRouter , Navigate, RouterProvider ,  } from "react-router-dom"



import { SingleProduct } from "./components"

import {Home , Speakers , Headphones , Earphones,  HeadphonesII, HeadphonesIII, SpeakersI, SpeakersII, HeadphonesI, EarphonesI  } from './page'
import MainLayout from "./layout/MainLayout"


function App() {

  
  

  const routes = createBrowserRouter([
    {
      path:"/",
      element: <MainLayout/>,
      children: [
        {
          index: true,
          element: <Home/>,
        },
        {
          path:"/headphones",
          element: <Headphones/>,
        },
        {
          path:"/headphonesI",
          element: <HeadphonesI/>,
        },
        {
          path:"/headphonesII",
          element: <HeadphonesII/>,
        },
        {
          path:"/headphonesIII",
          element: <HeadphonesIII/>,
        },
        {
          path:"/speakers",
          element:<Speakers/>,
        },
        {
          path:"/speakersI",
          element:<SpeakersI/>,
        },
        {
          path:"/speakersII",
          element:<SpeakersII/>,
        },
        {
          path: "/earphones",
          element:<Earphones/>
        },
        {
          path: "/earphonesI",
          element:<EarphonesI/>
        },
        {
          path: "/singleProduct",
          element:<SingleProduct/>
        },
      ],
    },
   
  ])
  return (
    <>
    <div className="">
    <RouterProvider router={routes}/>
    </div>
    </>
  )
}

export default App