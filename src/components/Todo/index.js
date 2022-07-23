import { Container, Content, Description, Status } from "./styles";

const TodoItem = ({ data }) => {
  
  function formatDate(receiveDate){
    const date = new Date(receiveDate);
    let day = date.getDate();
    let mounth = date.getMonth();
    let year = date.getFullYear();
    return `${day}/${mounth}/${year}`;
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

  return(
    <Container>
      <Content>
      <Description>Descrição: {data.description}</Description>
      <Description>Criado em: {formatDate(data.createdAt)}</Description>
      <Description>Entregar em: {formatDate(data.deadlineTodo)}</Description>
      {validDate(data.deadlineTodo) === true ? (
        <Status style={{backgroundColor: "#FF744F"}}>Atrasado</Status>
      ): (
        <Status style={{backgroundColor: "#00684a"}}>No prazo</Status>
      )}
      </Content>
    </Container>
  )
}

export default TodoItem;