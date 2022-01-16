import { Container } from "./styles";
import { PatientSearch } from "../Search/index";

export function Dashboard() {
  return (
    <Container>
      <div>
        <PatientSearch />
      </div>
    </Container>
  );
}
