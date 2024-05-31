import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryItemsLayout from "./components/CategoryItemsLayout";
import Checkout from "./pages/Checkout";
import Admin from "./pages/Admin";
import Dashboard from "./components/admin/Dashboard";
import Product from "./components/admin/Product";
import Category from "./components/admin/Category";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/category",
        element: <Categories />,
        children: [
            {
                path: ":categoryId",
                element: <CategoryItemsLayout />,
            },
        ],
    },
    {
        path: "/products/:productId",
        element: <ProductDetailPage />,
    },
    {
        path: "/cart",
        element: <Checkout />,
    },
    {
        path: "/admin",
        element: <Admin />,
        children: [
            {
                path: "",
                element: <Dashboard />,
            },
            {
                path: "products",
                element: <Product />,
            },
            {
                path: "categories",
                element: <Category />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
