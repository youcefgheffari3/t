import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


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

const Details = styled.div`
  display: flex;
  margin-top:16px;
  gap: 12px;
`

// const ChannelImage = styled.img`
//   width: 36px;
//   height: 36px;
//   border-radius: 50%;
//   background-color: #999;
// `

const Texts = styled.div``


const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme})=>theme.text};
  margin-left: 80px;
`

// const ChannelName = styled.h2`
//   font-size: 14px;
//   color: ${({theme})=>theme.textSoft};
//   margin: 9px 0px;
// `

// const Info = styled.div`
//   font-size: 14px;
//   color: ${({theme})=>theme.textSoft};
// `




const Cards = () => {
  return (
    <Link to="/Teachers/test" style={{textDecoration:"none"}}>
    <Container>
      <Image/>
      <Details>
        <Texts>
          <Title>Dr. Djeloul Bouchiha</Title>
        </Texts>
      </Details>
    </Container>
    </Link>
  )
}





export default Cards