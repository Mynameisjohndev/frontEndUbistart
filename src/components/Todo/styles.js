import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 70px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`

export const Content = styled.div`
  width: 80%;
  height: 100%;
  background-color: #181fad;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`
export const Description = styled.p`
  color: #c1c4ff; 
`
export const Status = styled.span`
  color: #fff;
  width: 20%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`