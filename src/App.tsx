import { useEffect } from "react";
import Cursor from "./components/Cursor";
import Homepage from "./pages/Homepage";
import Aos from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);

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
      <Cursor />
      <Provider store={store}>
        <Homepage />
      </Provider>
    </>
  );
}

export default App;
