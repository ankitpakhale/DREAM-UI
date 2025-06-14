import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

const PageLayout = ({ children, className }: PageLayoutProps) => {
  return (
    <div className={cn("transition-colors duration-500", className)}>
      {children}
    </div>
  );
};

export default PageLayout;
