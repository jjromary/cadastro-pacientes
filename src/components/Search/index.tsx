import React, { useEffect, useState } from "react";
import { Cards } from "../Cards/index";
import axios from "axios";
import { Paciente } from "../../types/Paciente";
import { Container } from "./styles";


type Search ={
  nome_like: string
}

export function PatientSearch() {
  const [patient, setPaciente] = useState<Paciente[]>([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const params: Search= {
      nome_like: ''
    };

    if(search) {
        params.nome_like = search;
    }else{}
    axios.get("http://localhost:5000/pacientes", {params})
        .then((response) => {
      setPaciente(response.data);
    });
  }, [search]);

  return (
    <Container>
      <input
        type="search"
        placeholder="Buscar paciente"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
        {patient.map((paciente, index) => (
          <Cards key={index} paciente={paciente} />
        ))}
    </Container>
  );
}
