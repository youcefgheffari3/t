import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import folder from '../img/download.png'


const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`


const Image = styled.div`
  width: 100%;
  height: 202px;
  max-width: 100%;
`

const Details = styled.div`
  display: flex;
  margin-top:16px;
  gap: 12px;
`


const Texts = styled.div``


const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme})=>theme.text};
  margin-left: 80px;
`


const Cards = () => {
  return (
    <Link to="/Teachers/1" style={{textDecoration:"none"}}>
    <Container>
      <Image src={folder}/>
      <Details>
        <Texts>
          <Title>Dr. Bouziane</Title>
        </Texts>
      </Details>
    </Container>
    </Link>
  )
}





export default Cards