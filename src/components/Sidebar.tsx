import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "./ui/Button";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const categories = useSelector((state: RootState) => state.categories.categories);

    return (
        <nav className="px-2 md:px-0">
            <Button className="md:hidden" variant="secondary" onClick={toggleMenu}>
                Menu
            </Button>

            <ul className={`${isOpen ? "block mt-4" : "hidden"} md:block`}>
                {categories.map(({ id, category_name }) => (
                    <li key={id}>
                        <NavLink
                            to={`/category/${category_name}`}
                            className={({ isActive }) => {
                                return `block pb-2 capitalize ${isActive ? "font-bold" : ""}`;
                            }}>
                            {category_name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default Sidebar;
