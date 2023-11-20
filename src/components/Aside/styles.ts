import styled, { css } from 'styled-components';


export const Container = styled.div`
    grid-area: AS;

    color: ${props => props.theme.colors.white};

    background-color: ${props => props.theme.colors.secondary};
    padding: 15px 0 0 25px;

    border-right: 1px solid ${props => props.theme.colors.gray};

    position: relative;

    @media(max-width: 600px){
        padding-left: 20px;
        position: fixed;
        z-index: 2;

        width: 170px;
    }
`;
 