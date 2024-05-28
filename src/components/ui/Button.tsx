import { cva } from "class-variance-authority";
import { cn } from "../../util/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

const Button = ({ className, type, variant, ...rest }: ButtonProps) => {
    return <button {...rest} className={cn(buttonVariants({ variant }), className)} type={type} />;
};

const buttonVariants = cva(
    "py-1.5 px-3 rounded-md cursor-pointer no-underline text-xs transition-all",
    {
        variants: {
            variant: {
                primary:
                    "border border-grey-200 bg-grey-300 hover:bg-grey-400 text-grey-50 shadow-[0px_0px_0px_1.5px_#333,0px_1px_0px_1.5px_#333,0px_3px_0px_0px_#000000]",
                secondary:
                    "border border-grey-400 bg-white hover:bg-grey-50 text-grey-300 shadow-[inset_0px_-3px_0px_0px_#b5b5b5]",
            },
        },
        defaultVariants: {
            variant: "primary",
        },
    }
);

export default Button;
