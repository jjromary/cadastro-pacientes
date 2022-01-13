import { Container } from "./styles";

interface ButtonProps {
  name: string
}

export function Button({name}: ButtonProps) {
  return (
    <Container>
      <button type="button" >
        {name}
      </button>
    </Container>
  );
}
