import { Outlet } from "react-router-dom";
import MyNavbar from "@/components/MyNavbar";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <MyNavbar />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
