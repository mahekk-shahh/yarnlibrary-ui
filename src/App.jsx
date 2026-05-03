import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import "./App.css";
import MainNavigator from "./navigator/MainNavigator";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <SonnerToaster />
      <MainNavigator />
    </>
  );
}

export default App;
