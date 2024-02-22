import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222;
  color: #fff;
  padding: 20px 0;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0px black;
`;

const Button = styled.button`
  margin: 10px;
  padding: 5px 10px;
  cursor: pointer;
`;

const ButtonAdd = styled.button`
  box-sizing: border-box;
  border-radius: 2px;
  padding: 5px 0;
  font-weight: bold;
  border: 1px solid #666;
  background-color: #eee;
  cursor: pointer;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageLabel = styled.div`
  min-width: 70px;
`;

const PaginationButton = styled.button`
  padding: 5px;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  max-width: 200px;
  gap: 10px;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 700px;
  margin: 20px auto;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
`;

const ClearButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border: none;
  cursor: pointer;
`;

const TileContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #222;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0px black;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 10px 0;
`;

const Title = styled.div`
  text-shadow: 0 1px 2px black;
  color: #fff;
`;

const Description = styled.div`
  font-size: 12px;
  text-shadow: 0 1px 2px black;
  color: lightblue;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #eee;
  line-height: 20px;
  border-radius: 50%;
  border: 1px solid;
  cursor: pointer;
`;

export {
  FormContainer,
  Button,
  ButtonAdd,
  PaginationContainer,
  PageLabel,
  PaginationButton,
  HeaderContainer,
  GridContainer,
  InputContainer,
  Input,
  ClearButton,
  TileContainer,
  Overlay,
  Title,
  Description,
  Image,
  DeleteButton,
};
