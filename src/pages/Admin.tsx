import { Outlet } from "react-router-dom";
import SideBar from "@/components/admin/SideBar";

const Admin = () => {
    return (
        <section className=" mx-auto grid grid-cols-1 md:grid-cols-5">
            <SideBar />
            <Outlet />
        </section>
    );
};
export default Admin;
