import { Home, Sparkles } from "lucide-react";
import { Separator } from "./ui/separator";
import { NavLink } from "./nav-link";
import { AccountMenu } from "./ui/account-menu";
import Image from "next/image";
export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-18 items-center gap-6 px-6">
        <Image src="/image.png" alt="Logo" width={60} height={60} />
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink href="/">
            <Home className="h-4 w-4" />
            Início
          </NavLink>
          <NavLink href="/manualidades">
            <Sparkles className="h-4 w-4" />
            Manualidades
          </NavLink>
        </nav>

        <div className="flex-items ml-auto flex gap-2">
          {/* <ThemeToggle /> */}
          <AccountMenu />
        </div>
      </div>
    </header>
  );
}
