import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
        const variants = {
            primary: "bg-brand-red text-white hover:bg-red-700 shadow-lg shadow-brand-red/20 border border-transparent",
            secondary: "bg-navy-800 text-white hover:bg-navy-700 border border-navy-700",
            outline: "bg-transparent border-2 border-brand-red text-brand-red hover:bg-brand-red/10",
            ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading ? (
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : null}
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
