import { useState } from "react";
import Button from "../../components/Button";
import { Background } from "../../global/stlyes";
import { Select } from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useContextApp } from '../../context';

function Todo() {

  const [description, setDescription] = useState();
  const [deadlineTodo, setDeadlineTodo] = useState();
  const { user } = useContextApp()

  const createTodo = () => {
    const token = user.token;
    console.log(deadlineTodo)
    const dead = new Date(deadlineTodo)
      api.post("/todo/create",
      {
        owner: user.email,
        description,
        deadlineTodo
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        }
      ).then(()=>{
        toast.success("Tarefa criada com sucesso",{
          theme: "colored"
        });
      })
      .catch((err)=>{
        console.log(`error: ${err}`)
        toast.error("Tarefa não foi criada com sucesso",{
          theme: "colored"
        });
      })
    
  }

  return (
    <Background>
      <Select
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
      />
      <Select type="datetime-local"
        value={deadlineTodo}
        onChange={(e)=>setDeadlineTodo(e.target.value)}
      />
      <Button 
        style={{width: 120}} 
        title="Adicionar"
        action={createTodo}
      />
    </Background>
  );
}

export default Todo;
