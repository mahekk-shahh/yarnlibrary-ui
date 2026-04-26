import { Outlet } from "react-router-dom";
import MyNavbar from "@/components/MyNavbar";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Layout = () => {
  return (
    <div>
      <MyNavbar />
      <div>
        <Outlet />
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
