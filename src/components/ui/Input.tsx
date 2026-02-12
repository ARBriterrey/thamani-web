import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, ...props }, ref) => {
        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-300">
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    className={cn(
                        "flex h-11 w-full rounded-md border border-navy-700 bg-navy-800/50 px-3 py-2 text-sm ring-offset-navy-900 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
                        error && "border-red-500 focus-visible:ring-red-500",
                        className
                    )}
                    ref={ref}
                    {...props}
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
        );
    }
);
Input.displayName = "Input";

export { Input };
