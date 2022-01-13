import Modal from "react-modal";
import { Container } from "./styles";
import closeimg from "../../assets/close.svg";
import { Paciente } from "../../types/Paciente";
import React, { useState } from "react";
import axios from "axios";
import { ToastAnimated, showToast } from "../../ui-lib/toast"

Modal.setAppElement("#root"); //acessibilidade

interface NewPacienteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewPacienteModal({ isOpen, onRequestClose }: NewPacienteModalProps) {
  const [values, setValues] = useState<Paciente[]>([]);

  function Onchange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev: React.SyntheticEvent) {
    axios.post("http://localhost:5000/pacientes", values)
      .then((response) => {});
  }

  const successToast = () =>{
    showToast({ type: "success", message: "Paciente Cadastrado" });
  }

  return (
    <>
    <ToastAnimated />
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
      <Container onSubmit={onSubmit}>
        <h2> Cadastrar Novo Paciente</h2>

        <input
          placeholder="Nome"
          id="nome"
          name="nome"
          onChange={Onchange}
        />
        <input
          placeholder="Data de nascimento"
          id="data_nascimento"
          name="data_nascimento"
          onChange={Onchange}
        />
        <input
          placeholder="CPF"
          id="cpf"
          name="cpf"
          onChange={Onchange}
        />
        <input
          placeholder="sexo"
          id="sexo"
          name="sexo"
          onChange={Onchange}
        />
        <input
          placeholder="endereço"
          id="endereco"
          name="endereco"
          onChange={Onchange}
        />
        <input
          placeholder="Status"
          id="status"
          name="status"
          onChange={Onchange}
        />


        <button type="submit" onClick={successToast}>Salvar</button>
      </Container>
    </Modal>
    </>
  );
}
