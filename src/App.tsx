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
import CreateCategory from "./components/admin/CreateCategory";
import CreateProduct from "./components/admin/CreateProduct";
import ProtectedRoute from "./Auth/ProtectedRoute";
import AdminLogin from "./Auth/adminLogin";

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
        element: <ProtectedRoute element={<Admin />} />,
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
                path: "products/create",
                element: <CreateProduct />,
            },
            {
                path: "categories",
                element: <Category />,
            },
            {
                path: "categories/create",
                element: <CreateCategory />,
            },
        ],
    },
    {
        path: "/admin/login",
        element: <AdminLogin />
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
