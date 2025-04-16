import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
  className?: string;
}

export const FadeIn = ({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  className = "",
}: FadeInProps) => {
  let initial: { opacity: number; x?: number; y?: number } = { opacity: 0 };
  
  // Add direction-based initial state
  if (direction === "up") initial = { ...initial, y: 24 };
  if (direction === "down") initial = { ...initial, y: -24 };
  if (direction === "left") initial = { ...initial, x: 24 };
  if (direction === "right") initial = { ...initial, x: -24 };
  
  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
      className={`${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
};