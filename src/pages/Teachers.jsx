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

const Title = styled.h1`
    font-size: 30px;
    font-weight: 400;
    color:${({theme})=>theme.text};
`



const Recommendation = styled.div`
    flex: 2;
`

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color:${({theme})=>theme.textSoft};
    margin-top: 13px;
`


const Img = styled.img`
    max-width: 100%;
    -ms-flex-item-align: start;
    align-self: flex-start;
    border: 8px solid #FF8633;
    border-radius: 40px;

`

const Hr = styled.hr`
    margin: 15px 0px;
    border: 1px solid ${({theme})=>theme.textSoft};
`



const Teachers = () => {
  return (
    <Container>
        <Content>
            <Title>
                Dr Abdel Ghani Bouziane
            </Title>
            <Details>
                AI Developer and Teacher in CUN
            </Details>
            <Hr/>
        </Content>
        <Recommendation><Img src={teacher1}/></Recommendation>
    </Container>
  )
}

export default Teachers