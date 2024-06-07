import { FC } from "react";
import RequireAuth from "@auth-kit/react-router/RequireAuth";

const ProtectedRoute: FC<{ element: JSX.Element }> = ({ element }) => {
    return <RequireAuth fallbackPath={"/admin/login"}>{element}</RequireAuth>;
};

export default ProtectedRoute;
