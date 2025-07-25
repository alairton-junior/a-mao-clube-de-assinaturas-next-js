import { Button } from "@/components/ui/button";
import { DialogTitle } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, Menu } from "lucide-react";
import { NavMenu } from "../nav-menu";

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
            <Link href="/login">
              <Button variant="outline" className="text-primary">
                Login
              </Button>
            </Link>
            <Button className="text-sm">Assine</Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
