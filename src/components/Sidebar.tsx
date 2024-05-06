import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "./ui/Button";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="px-2 md:px-0">
            <Button className="md:hidden" variant="secondary" onClick={toggleMenu}>
                Menu
            </Button>

            <ul className={`${isOpen ? "block mt-4" : "hidden"} md:block`}>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) => {
                            return `block pb-2 font-medium ${isActive ? "font-bold" : ""}`;
                        }}>
                        Rings
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) => {
                            return `block py-2 font-medium ${isActive ? "font-bold" : ""}`;
                        }}>
                        Earrings
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) => {
                            return `block py-2 font-medium ${isActive ? "font-bold" : ""}`;
                        }}>
                        Bracelets
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) => {
                            return `block py-2 font-medium ${isActive ? "font-bold" : ""}`;
                        }}>
                        Necklaces
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) => {
                            return `block py-2 font-medium ${isActive ? "font-bold" : ""}`;
                        }}>
                        Pendants
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) => {
                            return `block py-2 font-medium ${isActive ? "font-bold" : ""}`;
                        }}>
                        Brooches
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) => {
                            return `block py-2 font-medium ${isActive ? "font-bold" : ""}`;
                        }}>
                        Anklets
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) => {
                            return `block py-2 font-medium ${isActive ? "font-bold" : ""}`;
                        }}>
                        Cufflinks
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) => {
                            return `block py-2 font-medium ${isActive ? "font-bold" : ""}`;
                        }}>
                        Tie Clips
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) => {
                            return `block py-2 font-medium ${isActive ? "font-bold" : ""}`;
                        }}>
                        Charms
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to=""
                        className={({ isActive }) => {
                            return `block py-2 font-medium ${isActive ? "font-bold" : ""}`;
                        }}>
                        Body Jewelry (such as nose rings, belly button rings)
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
export default Sidebar;
