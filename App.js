import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/Components/Contact";
import About from "./src/Components/About";
import ErrorPage from "./src/Components/Error";
import Cart from "./src/Components/Cart";
import RestaurantMenu from "./src/Components/RestaurantMenu";
// import Grocery from "./src/Components/Grocery";

//Chunking
//Code Splitting
//Dynamic Bundling
//lazy loading
//on demand loading
//dynamic import

const Grocery = lazy(() => import("./src/Components/Grocery"));

const AppComponent = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h5>Grocery Loading please wait</h5>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
