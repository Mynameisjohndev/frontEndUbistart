import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Background, Form, PressText, Title } from "../../global/stlyes";
import { useNavigate } from 'react-router-dom';

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const navigateTo = () => {
    navigation("/")
  }

  return (
    <Background>
      <Form>
        <Title>Cadastrar-se</Title>
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
        <PressText onClick={()=>navigateTo()}>Já possui conta? Entrar</PressText>
      </Form>
    </Background>
  );
}

export default Signup;
