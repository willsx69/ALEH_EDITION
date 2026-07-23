"use client";

import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { useRef } from "react";

interface MotionBoxProps extends HTMLMotionProps<"div"> {
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  distance?: number;
  once?: boolean;
}

export function MotionBox({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  distance = 40,
  once = true,
  className,
  ...props
}: MotionBoxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const getVariants = (): Variants => {
    const hidden = {
      opacity: 0,
      x: direction === "left" ? -distance : direction === "right" ? distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    };

    const visible = {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    };

    return { hidden, visible };
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={getVariants()}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className,
  ...props
}: MotionBoxProps) {
  return (
    <MotionBox
      direction="none"
      delay={delay}
      distance={0}
      className={className}
      {...props}
    >
      {children}
    </MotionBox>
  );
}

export function SlideUp({
  children,
  delay = 0,
  className,
  ...props
}: MotionBoxProps) {
  return (
    <MotionBox
      direction="up"
      delay={delay}
      distance={50}
      className={className}
      {...props}
    >
      {children}
    </MotionBox>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  ...props
}: MotionBoxProps & { staggerDelay?: number }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
