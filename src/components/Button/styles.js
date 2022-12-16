import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: none;
    background-color: ${({isEqual}) => (isEqual ?  '#f9cf00' : '#353334')};
    color: ${({isEqual, isNumber}) => (isEqual || isNumber ? '#f6f6f6' : '#f9cf00')};
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    transition: opacity 1s;

    &:hover {
        opacity: 0.6;
    }

`;
