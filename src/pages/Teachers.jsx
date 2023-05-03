import React from 'react'
import styled from 'styled-components'
import teacher1 from '../img/33.png'


const Container = styled.div`
    display: flex;
    gap: 24px;
`


const Content = styled.div`
    flex: 5;
`



const TeachersWrapper = styled.div`
    flex: 5;
`

const Title = styled.div`
    flex: 5;
`



const Recommendation = styled.div`
    flex: 2;
`
const Img = styled.img`
    max-width: 100%;
    -ms-flex-item-align: start;
    align-self: flex-start;
    border: 8px solid #FF8633;
    border-radius: 40px;

`


const Teachers = () => {
  return (
    <Container>
        <Content>
            <Title>
                Dr Bouziane
            </Title>
        </Content>
        <Recommendation><Img src={teacher1}/></Recommendation>
    </Container>
  )
}

export default Teachers