import React from "react";
import { cn } from "../../util/cn";
import { cva } from "class-variance-authority";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    inputType: React.InputHTMLAttributes<HTMLInputElement>["type"];
    placeholder?: string;
    variant?: "primary" | "secondary"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, inputType, variant, placeholder, ...rest }, ref) => {
        return (
            <input
                {...rest}
                ref={ref}
                className={cn(inputVariant({ variant }), className)}
                placeholder={placeholder}
                type={inputType}
            />
        );
    }
);

const inputVariant = cva(
    "px-4 py-2 rounded-lg border focus:outline-none text-sm placeholder:text-grey-200 border-grey-200",
    {
        variants: {
            variant: {
                primary: "bg-grey-300  focus:border-white text-white",
                secondary: "bg-white text-grey-400 border-grey-50 focus-visible:ring-offset-2 focus-visible:ring-grey-400 focus-visible:ring-2"
            },
        },
        defaultVariants:{
            variant: "primary"
        }
    }
);

export default Input;
