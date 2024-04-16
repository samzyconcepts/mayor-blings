import React from "react";
import { cn } from "../../util/cn";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    inputType: React.InputHTMLAttributes<HTMLInputElement>["type"];
    placeholder?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, inputType, placeholder, ...rest }, ref) => {
        return (
            <input
                {...rest}
                ref={ref}
                className={cn(
                    "px-4 py-2 rounded-lg border border-grey-200 bg-grey-300 focus:outline-none focus:border-white text-white placeholder:text-grey-200 text-sm",
                    className
                )}
                placeholder={placeholder}
                type={inputType}
            />
        );
    }
);

export default Input;
