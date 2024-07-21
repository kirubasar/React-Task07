import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"
import Books from "./pages/Books";
import Authors from "./pages/Authors";
import {loader as booksLoader} from './pages/Books'
import {loader as authorsLoader} from './pages/Authors'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Books />,
    loader: booksLoader
  },
  {
    path:"authors",
    element:<Authors/>,
    loader: authorsLoader
  }
  
])
const App = () => {
  return (
   <RouterProvider router ={router}/>
  )
}

export default App;