import Modal from "react-modal";
import { Container } from "./styles";
import closeimg from "../../assets/close.svg";
import { Paciente } from "../../types/Paciente";
import React, { useState } from "react";
import axios from "axios";

Modal.setAppElement("#root"); //acessibilidade

interface NewPacienteModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewPacienteModal({
  isOpen,
  onRequestClose,
}: NewPacienteModalProps) {
  const [values, setValues] = useState<Paciente[]>([]);

  function Onchange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function OnchangeStatus(ev: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev: React.SyntheticEvent) {
    axios
      .post("http://localhost:5000/pacientes", values)
      .then((response) => {});
  }

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
        <Container onSubmit={onSubmit}>
          <h2> Cadastrar Novo Paciente</h2>

          <input placeholder="Nome" id="nome" name="nome" onChange={Onchange} />
          <input placeholder="Data de nascimento" id="data_nascimento" name="data_nascimento"onChange={Onchange}/>
          <input placeholder="CPF" id="cpf" name="cpf" onChange={Onchange} />
          <input placeholder="Sexo" id="sexo" name="sexo" onChange={Onchange} />
          <input placeholder="Endereço" id="endereco" name="endereco" onChange={Onchange} />

          <div className="labelStatus">
            <span>Status do Paciente</span>
          </div>
          
          <select id="status" name="status" onChange={OnchangeStatus}>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
          <button type="submit">Salvar</button>
        </Container>
      </Modal>
    </>
  );
}
