import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, container = true, children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                className={cn("py-20 md:py-32 relative", className)}
                {...props}
            >
                {container ? (
                    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
