import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './styles/main.scss';
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import QuotePage from './pages/QuotePage/QuotePage.jsx';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/quote",
    element: <QuotePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
