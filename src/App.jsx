import "./App.css";
import MainNavigator from "./navigator/MainNavigator";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <MainNavigator />
    </>
  );
}

export default App;
