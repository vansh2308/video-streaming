import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginForm from './components/LoginForm.jsx';
import Landing from './components/Landing.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import User from './components/User.jsx';
import Dashboard from './components/Dashboard.jsx';
import Profile from './components/Profile.jsx';
import Manage from './components/Manage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "",
        element: <Landing />,
        children: [
          {
            path: "",
            element: <LoginForm />
          }, 
          {
            path: "/register",
            element: <RegisterForm />
          }
        ]
      }, 
      {
        path: "/:user",
        element: <User />,
        children: [
          {
            path: "/:user/",
            element: <Dashboard />
          }, 
          {
            path: "/:user/profile",
            element: <Profile />
          }, 
          {
            path: "/:user/manage",
            element: <Manage />
          }

        ]
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
