import { useEffect } from "react";
import { createPortal } from "react-dom";

import * as SC from "./ModalStyles"

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ toggleModal, image }) => {
    
     const handleBackdropClick = (evt) => {
       if (evt.target !== evt.currentTarget) {
         toggleModal();
       }
     };

     useEffect(() => {
       window.addEventListener("keydown", (evt) => {
         if (evt.code === "Escape") {
           toggleModal();
         }
       });
     });
    return createPortal(
      <SC.Overlay onClick={handleBackdropClick}>
        <SC.Modal>
          <SC.Image src={image} alt={image} />
        </SC.Modal>
      </SC.Overlay>,
      modalRoot
    );
}
 
export default Modal;
