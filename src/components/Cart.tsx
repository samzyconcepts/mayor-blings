import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Link } from "react-router-dom";

const Cart = () => {
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const cartItems = useSelector((state: RootState) => state.cart.items);

    useEffect(() => {
        setCartItemsCount(cartItems.length);
    }, [cartItems]);

    return (
        <Link
            to="/cart"
            className="relative flex gap-2 text-white p-2 bg-grey-300 w-fit rounded-lg hover:bg-grey-200">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16.3638 6.86985C16.3638 4.48385 14.4298 2.54985 12.0438 2.54985C9.65783 2.53885 7.71583 4.46485 7.70483 6.85085V6.86985"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.9727 11.3738H14.9267"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M9.14165 11.3738H9.09565"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.0342 21.4894C5.52619 21.4894 4.77719 19.4394 3.31619 14.0224C1.85019 8.58842 4.79119 6.55542 12.0342 6.55542C19.2772 6.55542 22.2182 8.58842 20.7522 14.0224C19.2912 19.4394 18.5422 21.4894 12.0342 21.4894Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <span className="hidden md:block">Cart ({cartItemsCount})</span>
            <span className="absolute -top-2 -right-1 flex items-center justify-center bg-red-500 rounded-full h-5 w-5 p-2 text-[10px] md:hidden">
                {cartItemsCount}
            </span>
        </Link>
    );
};
export default Cart;
