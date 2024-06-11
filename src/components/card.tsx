import icons from "@/assets/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { forwardRef } from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  readme?: string;
  githubLink?: string;
  deployedLink?: string;
  videoLink?: string;
  figmaLink?: string;
  text?: string;
  company?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      title,
      readme,
      githubLink,
      deployedLink,
      videoLink,
      figmaLink,
      text,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          "flex justify-between items-center py-3 px-4 border-text dark:border-gray-400 border-1 rounded-md hover:scale-102 transition-transform duration-200 ease-in-out gap-3",
          {
            "justify-center": !text && !readme && !githubLink && !deployedLink,
          }
        )}
        {...props}
        ref={ref}
      >
        <h3 className="font-normal truncate ">
          {title} {props?.company && `@ ${props.company}`}
        </h3>
        <div className="flex gap-3 flex-shrink-0 justify-center items-center">
          {readme && (
            <Link href={readme} aria-label="documentation link">
              <icons.docs />
            </Link>
          )}
          {githubLink && (
            <Link href={githubLink} aria-label="github link" target="_blank">
              <icons.github />
            </Link>
          )}
          {figmaLink && (
            <Link href={figmaLink} aria-label="figma link" target="_blank">
              <icons.figma />
            </Link>
          )}

          {deployedLink && (
            <Link href={deployedLink} aria-label="live link" target="_blank">
              <icons.open />
            </Link>
          )}
          {videoLink && (
            <Link href={videoLink} aria-label="video link" target="_blank">
              <icons.video />
            </Link>
          )}
          {text && <p>{text}</p>}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";
