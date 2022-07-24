import styled from "styled-components";

export const Select = styled.input`
  border: 0;
  outline : 0;
  width: 30%;
  height: 70px;
  background-color: #c1c4ff;
  border-radius: 10px;
  color: #141a82;
  padding: 0px 10px;
  margin: 10px;
`
export const Form = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  display: flex;
  width: 100%;
`

export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  margin-top: 100px;
`
export const Row = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: 75%;
`

export const TodoList = styled.div`
  background-color: #c1c4ff;
  height: 350px;
  width: 46%;
  margin-top: 100px;
  border-radius: 4px;
  overflow:auto; 
`
export const Logout = styled.h4`
  color: #c1c4ff;
  align-self: flex-end;
  margin-right: 10%;
  cursor: pointer;
`

