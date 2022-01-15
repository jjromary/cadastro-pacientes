import { Container, Content } from "./styles";
import { Paciente } from "../../types/Paciente";
import { Link } from "react-router-dom"

type cardProps = {
  paciente: Paciente;
};

export function Cards({ paciente }: cardProps) {
  return (
    <Container>
      <Content>
        <div className="data_patient">
         <div className="active">
         <span>
            <h5>Status do Paciente</h5>
            {paciente.status}
          </span>
         </div>
          <div className="personal">
            <span>
              <h5>Nome</h5>
              {paciente.nome}
            </span>
            <span>
              <h5>Data de Nascimento</h5> {paciente.data_nascimento}
            </span>
            <span>
              <h5>Sexo</h5> {paciente.sexo}
            </span>
          </div>
          <div className="documentation">
            <span>
              <h5>CPF</h5> {paciente.cpf}
            </span>
          </div>
          <div className="locality">
            <span>
              <h5>Endereço</h5>
              {paciente.endereco}
            </span>
          </div>
        </div>
        <div className="actions">
          <Link to={`/edit/${paciente.id}`}>Editar Paciente</Link>
        </div>
      </Content>
    </Container>
  );
}
