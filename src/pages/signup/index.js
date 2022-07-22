import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Background, Form, PressText, Title } from "../../global/stlyes";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from "../../services/api";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const navigateTo = () => {
    navigation("/")
  }

  const signup = async() => {
    api.post('/user/signup',{email, password})
    .then(()=>{
      toast.success("Registrado com sucesso!", {
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
        <Title>Cadastrar-se</Title>
        <Input
          placeholder="E-mail: "
          text={email}
          setText={setEmail}
          type="email"
        />
        <Input
          placeholder="Senha: "
          text={password}
          setText={setPassword}
          type="password"
        />
        <Button
          title="Cadastrar"
          action={()=>signup()}
        />
        <PressText onClick={()=>navigateTo()}>Já possui conta? Entrar</PressText>
      </Form>
    </Background>
  );
}

export default Signup;
