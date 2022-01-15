import { useParams } from "react-router-dom";
import { Form } from "../../components/Form";

export function PagesForm(){
    const { id } = useParams();

    return(
        <div>
           <Form id={id ? Number.parseInt(id, 10) : null }/>
        </div>
    )
}