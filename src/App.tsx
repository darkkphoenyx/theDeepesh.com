import Cursor from "./components/Cursor";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Cursor />
      <div className="bg-background text-primary">
        <Homepage />
      </div>
    </>
  );
}

export default App;
