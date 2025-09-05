import { useEffect, useState } from "react";
import Cursor from "./components/Cursor";
import Homepage from "./pages/Homepage";
import Aos from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Lenis from "lenis";
import PreLoader from "./pages/sections/PreLoader/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      Aos.init({
        duration: 1000,
        once: false,
      });

      setTimeout(() => {
        Aos.refresh();
      }, 100);
    }
  }, [loading]);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      {loading && <PreLoader />}
      <Cursor />
      <Provider store={store}>{!loading && <Homepage />}</Provider>
    </>
  );
}

export default App;
