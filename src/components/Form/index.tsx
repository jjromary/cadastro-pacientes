import React, { useEffect, useState } from "react";
// import { Paciente } from "../../types/Paciente";
import { Container } from "./styles";
import {useNavigate } from 'react-router-dom'
import axios from "axios";

interface idProps  {
  id: number | null;
}

const initialValue = {
  nome: '',
  data_nascimento: '',
  cpf: '',
  sexo: '',
  endereco: '',
  status: 'Ativo'
}

export function Form ({id}:( idProps)){
  const [values, setValues] = useState(initialValue);
  const navigate = useNavigate() 

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/pacientes/${id}`)
        .then((response)=>{
          setValues(response.data)
        })
    }
  }, [])

  function Onchange(ev: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function OnchangeStatus(ev: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
    
  }

  function onSubmit(ev: React.SyntheticEvent) {
    
    const method = id ? 'put' : 'post';
    const url = id ? `http://localhost:5000/pacientes/${id}` : `http://localhost:5000/pacientes`

    axios[ method ]( url, values )
      .then((response) => {
      });
      
      navigate("/");
  }
    return(
        <Container onSubmit={onSubmit}>
          <h2> Formulário Paciente</h2>

          <input placeholder="Nome" id="nome" name="nome" onChange={Onchange} value={values.nome} required/>
          <input placeholder="Data de nascimento" id="data_nascimento" name="data_nascimento"onChange={Onchange} value={values.data_nascimento} required/>
          <input placeholder="CPF" id="cpf" name="cpf" onChange={Onchange} value={values.cpf} required/>
          <input placeholder="Sexo" id="sexo" name="sexo" onChange={Onchange} value={values.sexo} required/>
          <input placeholder="Endereço" id="endereco" name="endereco" onChange={Onchange} value={values.endereco} />

          <div className="labelStatus">
            <span>Status do Paciente</span>
          </div>

          <select id="status" name="status" onChange={OnchangeStatus} required>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
          </select>
          <div  className="saveButton">
          <button type="submit">Salvar</button>

          </div>
        </Container>
    )
}