import { useState, useEffect, useCallback } from "react";
import Button from "../../components/Button";
import { Background } from "../../global/stlyes";
import { Select, Container, Form, TodoList, Row, Logout } from "./styles";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useContextApp } from '../../context';
import TodoItem from "../../components/Todo";

function Todo() {

  const [description, setDescription] = useState();
  const [deadlineTodo, setDeadlineTodo] = useState();
  const [openTodos, setOpenTodos] = useState([]);
  const [closedTodos, setClosedTodos] = useState([]);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState();
  const [end, setEnd] = useState(false);
  const { user, setUser } = useContextApp()

  const createTodo = () => {
      api.post("/todo/create",
        {
          owner: user.email,
          description,
          deadlineTodo
          },
        ).then(()=>{
          toast.success("Tarefa criada com sucesso",{
            theme: "colored"
          });
          loadTodos();
        })
        .catch(()=>{
          toast.error("Não foi possível criar a tarefa!",{
            theme: "colored"
          });
        })
  }

  const editTodo = () => {
    api.patch(`/todo/edit/${edit._id}`,{
      deadlineTodo,
      description
    })
    .then(()=>{
      toast.success("Tarefa editada com sucesso",{
        theme: "colored"
      });
      loadTodos();
    })
    .catch(()=>{
      toast.error("Não foi possível editar a tarefa!",{
        theme: "colored"
      });
    })
  }
  const endTodo = () => {
    api.patch(`/todo/end/${end._id}`,{
      endTodo: new Date()
    })
    .then(()=>{
      toast.success("Tarefa finalizada com sucesso",{
        theme: "colored"
      });
      loadTodos();
    })
    .catch(()=>{
      toast.error("Não foi possível finalizar a tarefa!",{
        theme: "colored"
      });
    })
    setEnd();
  }

  function validTypeTodo(allTodos){
    let open = [];
    let close = [];
    allTodos.map((item) => {
      if(item.endTodo){
        close.push(item);
      }else{
        open.push(item);
      }
    })
    setLoading(false);
    setOpenTodos(open)
    setClosedTodos(close)
  }


  const loadTodos = useCallback(() =>{
    if(user.admin === "true"){
      console.log("teste")
       api.get(`/todo/list/true/${user.id}`,
     )
     .then((res)=>{
       setTodos(res.data);
       setLoading(true);
     })
   }
   return api.get(`/todo/list/false/${user.email}`,
     )
     .then((res)=>{
       setTodos(res.data);
       setLoading(true);
     })
  },[user.admin, user.email, user.id])

  function logoutUser(){
    localStorage.removeItem("token");
    setUser();
  }

  useEffect(()=>{
    if(loading === true){
      validTypeTodo(todos)
    }
  },[loading, todos]);

  useEffect(()=>{
      loadTodos();
  },[loadTodos]);

  useEffect(()=>{
    if(end){
      endTodo();
    }
  },[end, endTodo]);



  return (
    <Background style={{alignItems: "flex-start"}}>
      <Container>
        <Logout onClick={()=>logoutUser()}>Sair</Logout>
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
            title={edit ? "Salvar" : "Adicionar"}
            action={edit ? editTodo : createTodo}
            />
        </Form>
        <Row>
          <TodoList>
            {openTodos && openTodos.map((item, index)=> 
            <TodoItem 
              data={item} 
              key={index} 
              setEdit={setEdit}
              endAction={setEnd}
              setDeadlineTodo={setDeadlineTodo}
              setDescription={setDescription}
              isAdmin={user.admin === "true" ? true : false}
            /> 
            )}
          </TodoList>
          <TodoList>
            {closedTodos && closedTodos.map((item, index)=> 
              <TodoItem 
                data={item}
                key={index} 
                setEdit={setEdit}
                endAction={setEnd}
                setDeadlineTodo={setDeadlineTodo}
                setDescription={setDescription}
                isAdmin={user.admin === "true" ? true : false}
              /> 
            )}
          </TodoList>
        </Row>
      </Container>
    </Background>
  );
}

export default Todo;
