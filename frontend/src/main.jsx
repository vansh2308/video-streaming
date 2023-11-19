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
import DefaultViewer from './components/DefaultViewer.jsx';
import VideoViewer from './components/VideoViewer.jsx';
import store from "./store.js"
import { Provider } from 'react-redux';

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
            element: <Dashboard />,
            children: [
              {
                path: "/:user/",
                element: <DefaultViewer />
              },
              {
                path: "/:user/:vid",
                element: <VideoViewer />
              }
            ]
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
