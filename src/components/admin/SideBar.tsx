import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <nav className="">
            <ul>
                <li>
                    <NavLink
                        to="/admin"
                        end
                        className={({ isActive }) => {
                            return `block pb-2 capitalize ${isActive ? "font-bold" : ""}`;
                        }}>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/categories"
                        className={({ isActive }) => {
                            return `block pb-2 capitalize ${isActive ? "font-bold" : ""}`;
                        }}>
                        Category
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/products"
                        className={({ isActive }) => {
                            return `block pb-2 capitalize ${isActive ? "font-bold" : ""}`;
                        }}>
                        Product
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default SideBar;
