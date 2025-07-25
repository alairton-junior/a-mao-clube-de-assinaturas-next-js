import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { NavMenu } from "./nav-menu";
import Link from "next/link";

export function Header() {
  return (
    <header className="border-b bg-white z-10">
      <div className="flex h-18 items-center gap-6 justify-between container mx-auto">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo/tipo.png"
            alt="Logo"
            width={120}
            height={60}
            className="w-24 h-auto md:w-[120px]"
          />
        </Link>
        <NavMenu className="hidden sm:flex" />

        <div className="flex gap-2">
          <Link href="/login">
            <Button size={"lg"} variant="outline" className="hidden md:block">
              Login
            </Button>
          </Link>
          <Button size={"lg"} className="hidden md:block">
            Assine
          </Button>

          {/* Mobile menu button */}
          <Button size="icon" className="md:hidden" aria-label="Menu">
            <MobileMenu />
          </Button>
        </div>
      </div>
    </header>
  );
}
