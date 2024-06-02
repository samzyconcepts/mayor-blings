import logo from "@/assets/mayor-blings-logo.png";
import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <nav className="sticky top-0 bg-grey-400 h-svh py-5 px-10">
            <img src={logo} alt="mayor blings" className="block h-20" />
            <ul>
                <li>
                    <NavLink
                        to="/admin"
                        end
                        className={({ isActive }) => {
                            return `block pb-2 capitalize text-white text-sm ${
                                isActive ? "font-bold" : ""
                            }`;
                        }}>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/categories"
                        className={({ isActive }) => {
                            return `block pb-2 capitalize text-white text-sm ${
                                isActive ? "font-bold" : ""
                            }`;
                        }}>
                        Category
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin/products"
                        className={({ isActive }) => {
                            return `block pb-2 capitalize text-white text-sm ${
                                isActive ? "font-bold" : ""
                            }`;
                        }}>
                        Product
                    </NavLink>
                </li>
            </ul>

            <span>Logout</span>
        </nav>
    );
};
export default SideBar;
