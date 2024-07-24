import React from "react";
import "style.css";
import "tailwindcss/lib/css/preflight.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "pages/ContactUs";
import Layout from "pages/Layout";
import Home from "pages/Home";
import OnboardingQuiz from "components/onboarding_quiz/OnboardingQuiz";
import BlogIndex from "pages/BlogIndex";
import Events from "pages/Events"; // Import the Events component

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <AboutUs /> },
        { path: "/projects", element: <BlogIndex /> },
        { path: "/events", element: <Events /> },
        { path: "/contact", element: <ContactUs /> },
        { path: "/join-us", element: <OnboardingQuiz /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
