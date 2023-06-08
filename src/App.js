import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Course from './components/Course';
import './components/Courses';
import Courses from './components/Courses';
import Error from './components/Error';
import Faq from './components/Faq';
import Login from './components/Login';
import Register from './components/Register';
import Main from './layer/Main';
import CheckOut from './routes/CheckOut';
import PrivateRoutes from './routes/PrivateRoutes';
import Home from './Pages/Home/Home';
import BlogHome from './Pages/Blogs/BlogHome';
import SingleBlog from './Pages/Blogs/SingleBlog';
import UserDashboard from './Dashboard/UserDashboard';


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
          path: "/courses",
          loader: async ()=>{
            return fetch('https://assignment-ten-server-sage.vercel.app/courses')
          },
          element: <Courses />,
        },
        {
          path: "/course/:id",
          loader: async ({params})=>{
            return fetch(`https://assignment-ten-server-sage.vercel.app/courses/${params.id}`)
          },
          element: <Course />,
        },
        {
          path: "/course/:id",
          element: <Course />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/blog",
          loader: async ()=>{
            return fetch('https://assignment-ten-server-sage.vercel.app/blog')
          },
          element: <BlogHome />,
        },
        {
          path: "/blog/:id",
          loader: async ({params})=>{
            return fetch(`https://assignment-ten-server-sage.vercel.app/blog/${params.id}`)
          },
          element: <SingleBlog />,
        },
        {
          path: "/checkout",
          element: <PrivateRoutes><CheckOut/></PrivateRoutes>,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/dashboard",
          element: <UserDashboard />,
        },
        {
          path:'*', 
          element:<Error/>
        }
      ]
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
