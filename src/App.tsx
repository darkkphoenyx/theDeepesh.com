import { useEffect } from "react";
import Cursor from "./components/Cursor";
import Homepage from "./pages/Homepage";
import Aos from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <>
      <Cursor />
      <Provider store={store}>
        <Homepage />
      </Provider>
      {/* <div className="h-20 bg-background"></div> */}
    </>
  );
}

export default App;
