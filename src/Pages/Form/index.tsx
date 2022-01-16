import { useParams } from "react-router-dom";
import { Form } from "../../components/Form";
import { Container } from "./styles";

export function PagesForm(){
    const { id } = useParams();

    return(
        <Container>

        <div>
           <Form id={id ? Number.parseInt(id, 10) : null }/>
        </div>
        </Container>
    )
}