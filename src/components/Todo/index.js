import { Container, Content, Description, Edit, Status, End, Opiton } from "./styles";

const TodoItem = ({ 
data, 
isAdmin, 
setEdit,
setDeadlineTodo,
setDescription, 
endAction, 
...rest}) => {
  
  function formatDate(receiveDate){
    const date = new Date(receiveDate);
    let day = date.getDate();
    let mounth = date.getMonth();
    let year = date.getFullYear();
    return `${day}/${mounth+1}/${year}`;
  }

  function validDate(deadlineTodo){
    const now = new Date();
    const deadline = new Date(deadlineTodo);
    if(now > deadline){
      return true;
    }else{
      return false;
    }
  }

  function editItem(item){
      setDeadlineTodo(item.deadlineTodo.slice(0, 16));
      setDescription(item.description)
      setEdit(item);
  }

  return(
    <Container {...rest}>
      <Content>
      <Description>Descrição: {data.description}</Description>
      <Description>Criado em: {formatDate(data.createdAt)}</Description>
      <Description>Entregar em: {formatDate(data.deadlineTodo)}</Description>
      {isAdmin && (
        <Description>Responsável: {data.owner}</Description>
      )}
      {validDate(data.deadlineTodo) === true ? (
        <Status style={{backgroundColor: "#FF744F"}}>Atrasado</Status>
      ): (
        <Status style={{backgroundColor: "#00684a"}}>No prazo</Status>
      )}
      <Opiton>
        <Edit onClick={()=>editItem(data)}  >Editar</Edit>      
        <End onClick={()=>endAction(true)}>Finalizar</End>   
      </Opiton>
      </Content>
    </Container>
  )
}

export default TodoItem;