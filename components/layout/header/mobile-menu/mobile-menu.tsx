import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavMenu } from "../nav-menu";
import Link from "next/link";

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="">
        <Button
          size="icon"
          variant="ghost"
          className="md:hidden bg-transparent"
        >
          <Menu />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[300px] p-4 bg-white">
        <div className="flex flex-col gap-4">
          <DialogTitle className="text-sm text-gray-400 mb-4">MENU</DialogTitle>

          <NavMenu className="flex-col items-start space-y-4 mb-4" />

          <div className="flex gap-2">
            <Button variant="outline" className="text-primary">
              <Link href="/login">Login</Link>
            </Button>

            <Button className="text-sm">Assine</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
