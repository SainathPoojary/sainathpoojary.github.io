"use client";

import icons from "@/assets/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export interface CardProps extends HTMLMotionProps<"div"> {
  title: string;
  readme?: string;
  githubLink?: string;
  deployedLink?: string;
  text?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, title, readme, githubLink, deployedLink, text, ...props },
    ref
  ) => {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={cn(
          "flex justify-between items-center py-3.5 px-4 border-text dark:border-gray-400 border-1 rounded-md",
          {
            "justify-center": !text && !readme && !githubLink && !deployedLink,
          }
        )}
        {...props}
        ref={ref}
      >
        <h3 className="font-normal">{title}</h3>
        <div className="flex gap-3">
          {readme && (
            <Link href={`/doc/${readme}`}>
              <icons.docs />
            </Link>
          )}
          {githubLink && (
            <Link href={githubLink}>
              <icons.github />
            </Link>
          )}
          {deployedLink && (
            <Link href={"/"} target="_blank">
              <icons.open />
            </Link>
          )}
          {text && <p>{text}</p>}
        </div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";
