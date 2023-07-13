import styled from "styled-components";
import {Search} from "@mui/icons-material";
import {Badge} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Left = styled.div`
  // ділить блок Wrapper на рівні частини
  // якщо вказати 2 то цей блок буде у 2чі більший за інші
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.div`
  font-size: 14px;
  cursor: pointer;
`
const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`
const Input = styled.input`
  border: none;
`

const Center = styled.div`
  flex: 1;
  text-align: center;

`
const Logo = styled.h1`
  font-weight: bold;
`
const Right = styled.div`
  flex: 1`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input/>
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>DM</Logo>
                </Center>
                <Right>

                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>Sign in</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon   />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
};

export {Navbar}
