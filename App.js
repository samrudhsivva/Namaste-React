import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/Components/Contact";
import About from "./src/Components/About";
import ErrorPage from "./src/Components/Error";
import Cart from "./src/Components/Cart";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import Login from "./src/Components/Login";

const AppComponent = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
      <Login/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/About", element: <About /> },
      { path: "/Cart", element: <Cart /> },
      { path: "/Restaurant/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
