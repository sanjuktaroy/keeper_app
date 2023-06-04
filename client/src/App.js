import Home from "./Pages/Home/Home";
import {
  RouterProvider, 
  createBrowserRouter,
  //Route,
  //Outlet,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />,
  },
  {
    path:"/categories/:name",
    element: <Home />,
  },
]);

function App() {
  return (<div className="App" style={{backgroundColor:"rgb(245, 240, 240)"}}> 
  <RouterProvider router={router} /> 
  </div>);
}

export default App;
