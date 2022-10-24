import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import './components/Home';
import Home from './components/Home';
import Login from './components/Login';
import Order from './components/Order';
import Register from './components/Register';
import Main from './layer/Main';
import PrivateRoutes from './routes/PrivateRoutes';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/order",
          element: <PrivateRoutes><Order/></PrivateRoutes>,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        }
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
