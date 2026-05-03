import Error from "@/components/Error";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import About from "@/pages/About";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import OTPVerification from "@/pages/auth/OTPVerification";
import ResetPassword from "@/pages/auth/ResetPassword";
import Contact from "@/pages/Contact";
import ExhibitionDescription from "@/pages/exhibitions/ExhibitionDescription";
import Exhibitions from "@/pages/exhibitions/Exhibitions";
import Home from "@/pages/home/Home";
import Listing from "@/pages/listing/Listing";
import ListingCompany from "@/pages/listing/ListingCompany";
import ListingYarn from "@/pages/listing/ListingYarn";
import Login from "@/pages/auth/Login";
import News from "@/pages/news/News";
import NewsDescription from "@/pages/news/NewsDescription";
import Pricing from "@/pages/Pricing";
import Signup from "@/pages/auth/Signup";
import SupplierDetails from "@/components/suppliers/SupplierDetails";
import { HomeIcon, Loader2, LogIn } from "lucide-react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./Layout";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useAuth();
  if (isLoading) return (
    <div className="h-screen w-full pt-6 flex items-center justify-center">
      <Loader2 className="text-indigo-800 size-12 animate-spin" />
    </div>
  );
  if (isError && error.status !== 440 && error.status !== 401) {
    return (
      <Error
        type="error"
        heading="Error"
        description="Something went wrong!"
        info="We’re experiencing a temporary issue. Please retry after a few moments. If it persists, our admin team can assist you."
      />
    );
  }
  if (!data?.is_authenticated)
    return (
      <Error
        type="warning"
        heading="Login Required"
        info="You must be logged in to access this page. Please login to continue and enjoy all features."
        button={
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" onClick={() => navigate("/login")}>
              <LogIn size={18} strokeWidth={2} /> Login
            </Button>
            <Button variant="outline" onClick={() => navigate("/")}>
              <HomeIcon size={18} strokeWidth={2} /> Home
            </Button>
          </div>
        }
      />
    );
  return <Outlet />;
};

const MainNavigator = () => {
  const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verify" element={<OTPVerification />} />
      <Route path="/reset-password/:token" element={<ResetPassword />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/listing" element={<Listing />} />
          <Route path="/listing/yarns" element={<ListingYarn />} />
          <Route path="/listing/company" element={<ListingCompany />} />
          <Route path="/listing/company/:id" element={<SupplierDetails />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/exhibitions/:id" element={<ExhibitionDescription />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDescription />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <Error
            type="warning"
            heading="Page Not Found"
            button={
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="outline" onClick={() => navigate("/")}>
                  <HomeIcon size={18} strokeWidth={2} /> Home
                </Button>
              </div>
            }
          />
        }
      />
    </Routes>
  );
};

export default MainNavigator;
