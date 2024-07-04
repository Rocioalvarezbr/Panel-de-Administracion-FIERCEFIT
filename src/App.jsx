import "./App.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage"
import UsersPage from "./pages/UsersPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/productos",
      element: <ProductsPage />,
    },
    {
      path: "/ordenes",
      element: <OrdersPage />,
    },
    {
      path: "/usuarios",
      element: <UsersPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
