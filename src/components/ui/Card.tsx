import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hover = true, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={hover ? { y: -5 } : undefined}
                className={cn(
                    "relative overflow-hidden rounded-xl border border-navy-700 bg-navy-800/50 p-6 shadow-xl backdrop-blur-sm transition-colors",
                    hover && "hover:border-navy-600 hover:shadow-2xl hover:shadow-brand-red/5",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);
Card.displayName = "Card";

export { Card };
