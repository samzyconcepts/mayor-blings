import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import ProductDetailPage from "./pages/ProductDetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/category",
        element: <Categories />,
    },
    {
        path: "/product",
        element: <ProductDetailPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
