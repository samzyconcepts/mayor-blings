import logo from "../assets/mayor-blings-logo.png";

// Component
import Input from "./ui/Input";
import Cart from "./Cart";
import Account from "./Account";

const Navbar = () => {
    return (
        <nav className=" bg-grey-400">
            <div className="container mx-auto flex items-center justify-between px-2 md:px-0 py-4 md:py-2">
                <a href="#home" className="text-white">
                    <img src={logo} alt="mayor blings" className="w-20 md:w-32" />
                </a>
                <div className="relative">
                    <Input
                        inputType="search"
                        placeholder="Search for Product"
                        className="pl-8 w-40 md:w-96"
                    />
                    <svg
                        className="absolute left-3 top-1/2 w-4 -translate-y-1/2 fill-grey-100"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 13 14"
                        aria-hidden="true"
                        fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M8.82264 10.3833C7.89957 11.0841 6.74835 11.5 5.5 11.5C2.46243 11.5 0 9.03757 0 6C0 2.96243 2.46243 0.5 5.5 0.5C8.53757 0.5 11 2.96243 11 6C11 7.24835 10.5841 8.39957 9.8833 9.32264L12.7803 12.2197C13.0732 12.5126 13.0732 12.9874 12.7803 13.2803C12.4874 13.5732 12.0126 13.5732 11.7197 13.2803L8.82264 10.3833ZM9.5 6C9.5 8.20914 7.70914 10 5.5 10C3.29086 10 1.5 8.20914 1.5 6C1.5 3.79086 3.29086 2 5.5 2C7.70914 2 9.5 3.79086 9.5 6Z"
                            // fill="#fff"
                        />
                    </svg>
                </div>

                <div className="flex gap-1 md:gap-4">
                    <Cart />
                    <Account />
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
