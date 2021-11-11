// NPM packages
import { createPortal } from "react-dom";

// Project file
import { useModal } from "../../states/ModalProvider";
import CloseIcon from "../icons/CloseIcon";

export default function Modal() {
  // Global state
  const { modal, setModal, PORTAL_ID } = useModal();

  // Safeguards
  if (modal === null) return null;
  if (modal === undefined) return null;

  return createPortal(
    <div className="modal-container" id="modal">
      <div className="modal-background" onClick={() => setModal(null)}></div>
      <div className="modal-content">
        <CloseIcon iconClick={() => setModal(null)} />
        {modal}
      </div>
    </div>,
    document.getElementById(PORTAL_ID)
  );
}
