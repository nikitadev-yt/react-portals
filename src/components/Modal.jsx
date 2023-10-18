import { useSetAtom } from "jotai";
import { uiAtom } from "../state";

const Modal = () => {
  const setUi = useSetAtom(uiAtom);
  return (
    <div className="modal">
      <div className="modal-content">
        <button
          className="close-btn"
          onClick={() =>
            setUi((prev) => ({
              ...prev,
              modal: null,
            }))
          }
        >
          &times;
        </button>
        <h2>Modal</h2>
        <p>
          The FitnessGram Pacer Test is a multistage aerobic capacity test that
          progressively gets more difficult as it continues. The running speed
          starts slowly, but gets faster each minute after you hear this signal.
        </p>
      </div>
    </div>
  );
};
export default Modal;
