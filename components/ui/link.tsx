import * as React from "react";
import NextLink from "next/link";
import { cn } from "@/lib/utils";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, ...props }, ref) => {
    return (
      <NextLink
        className={cn(
          "text-primary underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none",
          className,
        )}
        {...props}
        ref={ref}
      />
    );
  },
);
Link.displayName = "Link";

export { Link };
