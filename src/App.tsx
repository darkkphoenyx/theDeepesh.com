import { useEffect } from "react";
import Cursor from "./components/Cursor";
import Homepage from "./pages/Homepage";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <>
      <Cursor />
      <Homepage />
      {/* <div className="h-20 bg-background"></div> */}
    </>
  );
}

export default App;
