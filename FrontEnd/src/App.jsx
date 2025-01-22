import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Routes from './routes/Routes'
function App() {
  const routes = createBrowserRouter(Routes)

  return (
    <>
    <RouterProvider router={routes}/>
    </>
  )
}

export default App
