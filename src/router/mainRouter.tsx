import { createBrowserRouter } from "react-router-dom";
import FirstLayout from "../components/common/FirstLayout";
import LandingScreen from "../pages/auth/LandingScreen";
import RegisterScreen from "../pages/auth/RegisterScreen";
// import SigninScreen from "../pages/auth/SigninScreen";
import Layout from "../components/common/Layout";
import HomeScreen from "../pages/home/HomeScreen";
import MailScreen from "../pages/auth/MailScreen"
import Sign from "../pages/auth/Sign";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <FirstLayout />,
    children: [
      {
        index: true,
        element: <LandingScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/mail",
    element: <MailScreen />,
  },
  {
    path: "/signin",
    element: <Sign />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
]);
