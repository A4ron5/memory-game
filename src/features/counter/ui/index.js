import styled, {css} from "styled-components";

export const StyledCounter = styled.div`
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.125rem;
    color: #fff;
    white-space: pre-wrap;
    
    ${({secondary}) => secondary && css`
      font-size: 2.5rem;
    `}
`;
