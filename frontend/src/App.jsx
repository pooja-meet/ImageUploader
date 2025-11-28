import { Children, createContext, useContext, useState } from 'react'
import Nav from './component/Nav'
import Home from './component/home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Images from './component/Images'
import Upload from './component/Upload'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'views',
        element: <Images />
      }, {
        path: 'uploads',
        element: <Upload />
      }
    ]
  }
])
const UserContext = createContext()
function App() {
  const [userdata, setUserdata] = useState(null)

  return (
    <>
      <UserContext.Provider value={[userdata, setUserdata]}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>)
}
export default App
export { UserContext }
