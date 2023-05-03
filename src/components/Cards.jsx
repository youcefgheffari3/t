import React from 'react'
import styled from 'styled-components'
import TopicIcon from '@mui/icons-material/Topic';
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

const Details = styled.div`
  display: flex;
  margin-top:16px;
  gap: 12px;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`

const Texts = styled.div``
const Title = styled.h1``
const ChannelName = styled.h2``
const Info = styled.div``




const Cards = () => {
  return (
    <Container>
      <Image/>
      <Details>
        <ChannelImage/>
      </Details>
    </Container>
  )
}





export default Cards