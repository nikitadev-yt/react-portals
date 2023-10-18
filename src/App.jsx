import { useSetAtom } from "jotai";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Overlays from "./components/Overlays";
import { uiAtom } from "./state";
import "./App.css";

function App() {
  const setUi = useSetAtom(uiAtom);
  return (
    <>
      <Overlays />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button
        onClick={() =>
          setUi((prev) => ({
            ...prev,
            modal: true,
          }))
        }
      >
        Toggle Modal
      </button>
    </>
  );
}

export default App;
