import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { CircleUserRound, Menu } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import url from "./url";

const MyNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useAuth();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      const { status } = await axios.post(
        `${url}/auth/logout/`,
        {},
        { withCredentials: true },
      );
      if (status === 200) {
        localStorage.removeItem("token");
        queryClient.invalidateQueries();
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Failed to logout: ", error);
    }
  };

  const links = [
    { name: "Home", to: "/" },
    { name: "Listing", to: "/listing" },
    { name: "Exhibitions", to: "/exhibitions" },
    { name: "News", to: "/news" },
    // { name: "Pricing", to: "/pricing" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-3 py-4 shadow-md sticky top-0 bg-white z-[51]">
      <div className="flex items-center">
        <Button
          variant="ghost"
          className="md:hidden pl-0"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-5 text-indigo-800" />
        </Button>

        <NavLink
          to="/"
          className="font-semibold text-indigo-800 flex items-center gap-1.5 text-2xl"
        >
          <img src="./images/logo.jpeg" alt="Yarn Library" className="h-8" />
          <h1>Yarn Library</h1>
        </NavLink>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        {links.map((link) => {
          const active = location.pathname === link.to;
          return (
            <NavLink
              key={link.name}
              to={link.to}
              className={`relative text-sm font-medium transition-all p-0.5 
                ${
                  active
                    ? "text-indigo-800 border-b-2 border-indigo-800"
                    : "text-gray-700"
                }`}
            >
              {link.name}
            </NavLink>
          );
        })}
      </div>

      {/* Actions */}
      <DropdownMenu>
        <DropdownMenuTrigger>
          <CircleUserRound className="text-indigo-800 size-7 stroke-[1.5]" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className={"z-[100] bg-white text-indigo-800"}>
          {data?.is_authenticated ? (
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          ) : (
            <DropdownMenuItem onClick={() => navigate("/auth/login")}>
              Login
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Mobile Menu */}
      <Sheet open={open} onOpenChange={setOpen} className="top-[64px]">
        <SheetContent side="top" className="top-[64px]" showCloseButton={false}>
          <div className="flex flex-col items-start m-6 gap-4 h-full">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`font-medium border-b-2 transition-all ${
                  location.pathname === link.to
                    ? "text-indigo-800 border-indigo-800"
                    : "border-transparent"
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MyNavbar;
