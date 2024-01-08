// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from './components/Hero/Hero.jsx';
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Hero />, errorElement: <ErrorPage /> },
]);

function App() {
  return <>
  <RouterProvider router={router} />
  </>;
}

export default App;
