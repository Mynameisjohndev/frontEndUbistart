import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Background, Form, Title } from "../../global/stlyes";

function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Background>
      <Form>
        <Title>Entrar</Title>
        <Input
          placeholder="E-mail: "
          text={email}
          setText={setEmail}
        />
        <Input
          placeholder="Senha: "
          text={password}
          setText={setPassword}
        />
        <Button
          title="Entrar"
          action={()=>console.log("testew")}
        />
      </Form>
    </Background>
  );
}

export default Signin;
