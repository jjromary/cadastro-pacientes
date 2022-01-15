import Modal from "react-modal";
import closeimg from "../../assets/close.svg";
import { Form } from "../Form";

Modal.setAppElement("#root"); //acessibilidade

interface NewPacienteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}


export function NewPacienteModal({isOpen, onRequestClose}: NewPacienteModalProps) {
  
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeimg} alt="fechar modal" />
        </button>
        
        <Form id={null}/>
        
      </Modal>
    </>
  );
}
