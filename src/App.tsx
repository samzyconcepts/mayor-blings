import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryItemsLayout from "./components/CategoryItemsLayout";

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
        path: "/product/:productId",
        element: <ProductDetailPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
