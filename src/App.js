import { createBrowserRouter, RouterProvider } from 'react-router';
import "swiper/css";               // ✅ new way
import "swiper/css/navigation";    // optional
import "swiper/css/pagination";    // optional
import './App.css';

import Course from './components/Course';
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
import { News } from './Pages/Blogs/News';
import { NewsDetails } from './Pages/Blogs/NewsDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/courses",
          loader: async () => {
            return fetch('https://assignment-ten-server-sage.vercel.app/courses');
          },
          element: <Courses />,
        },
        {
          path: "/course/:id",
          loader: async ({ params }) => {
            return fetch(`https://assignment-ten-server-sage.vercel.app/courses/${params.id}`);
          },
          element: <Course />,
        },
        { path: "/faq", element: <Faq /> },
        { path: "/blog", element: <BlogHome /> },
        { path: "/blog/:title", element: <SingleBlog /> },
        { path: "/news", element: <News /> },
        { path: "/news/:id", element: <NewsDetails /> },
        {
          path: "/checkout",
          element: <PrivateRoutes><CheckOut /></PrivateRoutes>,
        },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "/dashboard", element: <UserDashboard /> },
        { path: "*", element: <Error /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
