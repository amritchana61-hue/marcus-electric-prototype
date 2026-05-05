import { ReactNode, CSSProperties } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section" | "span";
  y?: number;
}

export const Reveal = ({ children, delay = 0, className, as = "div", y = 16 }: RevealProps) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const Tag = as as "div";

  const style: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transform: inView ? "translateY(0)" : `translateY(${y}px)`,
    opacity: inView ? 1 : 0,
    transitionProperty: "opacity, transform",
    transitionDuration: "600ms",
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={ref as never} className={cn(className)} style={style}>
      {children}
    </Tag>
  );
};
