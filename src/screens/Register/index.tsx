import {Container, Fields, Form, Header, TitleHeader} from "./styles";
import {Input} from "../../components/Form/Input/Input";
import {Button} from "../../components/Form/Button";

export default function () {
    return (
        <Container>
          <Header>
           <TitleHeader>Cadastro</TitleHeader>
          </Header>

         <Form>

         <Fields>
             <Input placeholder={"Nome"} />
             <Input placeholder={"Preço"} />
         </Fields>

             <Button title={"Enviar"}/>
         </Form>

        </Container>
    )
}
