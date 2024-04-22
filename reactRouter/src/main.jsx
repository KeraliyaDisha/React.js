import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About.jsx'
import Contact from './components/Contacts/Contact.jsx'
import Github from './components/Github/Github.jsx'
import User from './components/User/User.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'',
        element: <Home />
      }, 
      {
        path:'about',
        element: <About />
      },
      {
        path:'contact',
        element: <Contact />
      },
      {
        path:'github',
        element: <Github />
      },
      {
        path:'user/:userid',
        element: <User />
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<App />}>
//       <Route path='' element={<Home />}/>
//       <Route path='/about' element={<About />}/>
//       <Route path='/contact' element={<Contact />}/>
//       <Route path='/github' element={<Github />}/>
//     </Route>
//   )
// ) // another way of routing 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
