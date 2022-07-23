import { useState, useEffect } from "react";
import Button from "../../components/Button";
import { Background } from "../../global/stlyes";
import { Select, Container, Form, TodoList, Row } from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useContextApp } from '../../context';
import TodoItem from "../../components/Todo";

function Todo() {

  const [description, setDescription] = useState();
  const [deadlineTodo, setDeadlineTodo] = useState();
  const [openTodos, setOpenTodos] = useState([]);
  const [closedTodos, setClosedTodos] = useState([]);
  const { user } = useContextApp()

  const createTodo = () => {
    const token = user.token;
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
      .catch(()=>{
        toast.error("Tarefa não foi criada!",{
          theme: "colored"
        });
      })
    
  }

  function validTypeTodo(allTodos){
    let open = [];
    let close = [];
    allTodos.data.map((item) => {
      if(item.endTodo){
        close.push(item);
      }else{
        open.push(item);
      }
    })
    setOpenTodos(open)
    setClosedTodos(close)
  }

  function loadTodos(){
    if(user.admin){
      api.get(`/todo/list/true/${user.id}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.email}`,
        }
      })
      .then((res)=>{
        validTypeTodo(res);
      })
    } else {
      api.get(`/todo/list/false/${user.email}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,
        }
      })
      .then((res)=>{
        validTypeTodo(res);
      })
    }
  }

  useEffect(()=>{
    if(user){
      loadTodos();
    }
  },[user]);

  return (
    <Background style={{alignItems: "flex-start"}}>
      <Container>
        <Form>
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
        </Form>
        <Row>
          <TodoList>
            {openTodos.map((item, index)=> <TodoItem data={item} key={index} /> )}
          </TodoList>
          <TodoList>
            {closedTodos.map((item, index)=> <TodoItem data={item} key={index} /> )}
          </TodoList>
        </Row>
      </Container>
    </Background>
  );
}

export default Todo;
