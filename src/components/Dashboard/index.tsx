// import axios from "axios";
// import { Paciente } from "../../types/Paciente";
// import { useState, useEffect } from "react";
// import { Cards } from "../Cards";
import { Container } from "./styles";
import {PatientSearch} from "../Search/index"

export function Dashboard() {
  // const [paciente, setPaciente] = useState<Paciente[]>([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/pacientes").then((response) => {
  //     setPaciente(response.data);
  //   });
  // }, []);

  return (
    
    <Container>
      <div>
      <PatientSearch/>
      </div>
      {/* {paciente.map((paciente, index) => (
        <Cards key={index} paciente={paciente} />
      ))} */}
    </Container>
  );
}
