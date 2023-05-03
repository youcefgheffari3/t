import React from 'react'
import styled from 'styled-components'
import Teacher1 from '../img/unnamed.png'
import Teacher2 from '../img/33.png'

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`


const Image = styled.div`
  width: 100%;
  height: 202px;
  background-color: #999;
`


const Cards = () => {
  return (
    <Container>
      <Image/>
      <Image/>
    </Container>
  )
}





export default Cards