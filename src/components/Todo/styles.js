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
  background-color: #74747c;
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
export const Opiton = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 60%;
  width: 100%;
`

export const Edit = styled.h5`
  color: #00684a;
  width: 20%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
export const End = styled.h5`
  color: #FF744F;
  width: 20%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`