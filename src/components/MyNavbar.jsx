import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LogOut, Menu } from "lucide-react";
import { useState } from "react";

const MyNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isError } = useAuth();
  const queryClient = useQueryClient();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    queryClient.invalidateQueries({ queryKey: ["auth"] });
    navigate("/login");
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
    <nav className="flex items-center justify-between px-6 py-4 shadow-md sticky top-0 bg-white z-50">
      <div
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={"./images/logo.jpeg"} alt="Yarn Library" className="h-12" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
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

      {/* Desktop Auth Button */}
      <div className="hidden md:block">
        {data?.success && !isError ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button onClick={() => navigate("/login")}>Login</Button>
        )}
      </div>

      {/* Mobile Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="md:hidden">
          <Menu />
        </SheetTrigger>
        <SheetContent side="right">
          <div className="flex flex-col items-start m-6 gap-4 h-full">
            <div className="flex flex-grow flex-col items-start gap-4">
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

            <div className="justify-self-end">
              {data?.success && !isError ? (
                <Button onClick={handleLogout} variant="outline">
                  Logout
                  <LogOut />
                </Button>
              ) : (
                <Button onClick={() => navigate("/login")}>Login</Button>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MyNavbar;
