import styled from "styled-components";

export const Tr = styled.tr` border-top:2px solid #000`;
export const Td = styled.td`

padding-top: 15px;
text-align: ${(props) => (props.alignCenter ? "center" : "start")};
word-break: break-all;

`;

export const Label = styled.p`

color: ${(props) => (props.color ? props.color + "reen" : "red")};

`;

export const Button = styled.button`

  background-color: #ff2b2b;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  text-align: center;
  text-decoration: none;

`;