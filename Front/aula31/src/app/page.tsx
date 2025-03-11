'use client';
import styles from "./page.module.css";
import styled from "styled-components";

const Botao = styled.button`
background-color: #ff1;
color: #000;
padding: 10px 20px;
border-radius: 5px;
border: none;
cursor: pointer;
font-size:16px;
`
const Container = styled.div`
  background-color:#ccc;
  width:200px;
  height:200px;
  float: left;
`


export default function Home() {
  return(
    <>
      <h1 className="titulo">Hello World!</h1>
      <h1 className={ styles.titulo } >Hello World - cor diferente!!</h1>

      <Botao>Enviar</Botao>

      <Container>
        <Botao>Salvar</Botao>
      </Container>

      <Container className={ styles.fundo} style ={{backgroundColor:"#ff1493"}}>
        <h1>XPTO</h1>
      </Container>
    </>
  );
}