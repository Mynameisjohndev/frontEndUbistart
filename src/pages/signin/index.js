import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Background, Form, PressText, Title } from "../../global/stlyes";
import { useNavigate } from 'react-router-dom';

function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const navigateTo = () => {
    navigation("/signup")
  }

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
        <PressText onClick={()=>navigateTo()}>Registrar-se</PressText>
      </Form>
    </Background>
  );
}

export default Signin;
