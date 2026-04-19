"use client";

import Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes, type MouseEvent } from "react";

type SmoothScrollLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: `#${string}` | LinkProps["href"];
  };

export function SmoothScrollLink({
  href,
  onClick,
  children,
  ...props
}: SmoothScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      typeof href !== "string" ||
      !href.startsWith("#")
    ) {
      return;
    }

    const target = document.querySelector<HTMLElement>(href);

    if (!target) {
      return;
    }

    event.preventDefault();

    const navHeight = Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--nav-height"),
    );
    const offset = Number.isNaN(navHeight) ? 0 : navHeight + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.history.replaceState(null, "", href);
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
