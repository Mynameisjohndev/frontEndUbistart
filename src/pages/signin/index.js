import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Background, Form, PressText, Title } from "../../global/stlyes";
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";
import { ToastContainer, toast } from 'react-toastify';

function Signin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const navigateTo = () => {
    navigation("/signup")
  }

  const signin = async() => {
    api.get(`/user/session/${email}/${password}`)
    .then(()=>{
      toast.success("Logado com sucesso!", {
        theme: "colored"
      })
    })
    .catch(()=>{
      toast.error("Houve um erro tente novamente dentro de instantes!", {
        theme: "colored"
      })
    })
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
          action={()=>signin()}
        />
        <PressText onClick={()=>navigateTo()}>Registrar-se</PressText>
      </Form>
    </Background>
  );
}

export default Signin;
