import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 150px;
  height: 30px;
  background: pink;
  cursor: pointer;
  opacity: .9;
  border: 2px solid pink;
  
  &:hover {
    opacity: 1;
  }
  
  outline: none;
  padding: 0;
  margin: 0 auto;
  
  a {
    display: block;
    width: 100%;
    height: 100%;
    color: red;
    font-weight: bold;
    line-height: 30px;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
