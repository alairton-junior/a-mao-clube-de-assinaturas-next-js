"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export type NavLinkProps = LinkProps & {
  children: React.ReactNode;
  className?: string;
};

export function NavLink({
  href,
  children,
  className = "",
  ...props
}: NavLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      data-current={pathname === href}
      className={`text-primary hover:text-primary/70 data-[current=true]:text-foreground md:p-1 flex items-center gap-1.5 text-base font-medium ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
