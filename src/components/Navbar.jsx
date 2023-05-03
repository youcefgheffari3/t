import React from 'react'
import styled from 'styled-components'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({theme})=>theme.bgLighter};
    height: 56px;
`
const Wrapper = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0px 20px;
    position: relative;
`
const Search = styled.div`
    position: absolue;
    width: 40%;
    left: 0px;
    right: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
`
const Input = styled.input`
    border: none;
    background-color:transparent;
`

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color:#3ea6ff;
    border-radius: 3px;
    font-weight: 500;

    cursor: pointer;
    display:flex;
    align-items: center;
    gap: 5px;
`


const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Search>
                <Input placeholder='Category'/>
                <SearchOutlinedIcon/>
            </Search>
            <Button>
                <PersonPinIcon/>
            </Button>
        </Wrapper>
    </Container>
  )
}

export default Navbar