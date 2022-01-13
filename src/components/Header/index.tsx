import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTaskModal: () => void;
}

export function Header({ onOpenNewTaskModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <div className="logo">
          <h1>Clínica ACME</h1>
        </div>
        <div>
          <button type="button" onClick={onOpenNewTaskModal}>
            Cadastrar Paciente
          </button>
        </div>
      </Content>
    </Container>
  );
}
