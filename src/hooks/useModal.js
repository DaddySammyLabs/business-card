//   src//hooks/useModal.js

import { useState } from "react";

export function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    open,
    close,
  };
}

export default useModal;

// toUse: 1-import, 2-cont, 3-comp, 4-pros

// 1-import texts + useModal + ModalWindow
// import useModal from "../hooks/useModal";
// import ModalWindow from "../components/ModalWindow";

// 2-set-variable
// const { isOpen, open, close } = useModal();

// 3-use-in-component
// <>
//     <button onClick={open} className="header-button" type="button">
//         {texts.contact}
//     </button>

//     <ModalWindow show={isOpen} onClose={close} texts={texts} />

//     <ModalWindow show={isOpen} onClose={close} texts={texts}>
//       <div className="modal-window">
//         <h2 className="modal-title">{texts.modalTitle}</h2>
//         <p className="modal-text">{texts.modalText}</p>
//       </div>
//     </ModalWindow>
// </>;
