import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryItemsLayout from "./components/CategoryItemsLayout";
import Checkout from "./pages/Checkout";

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
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
