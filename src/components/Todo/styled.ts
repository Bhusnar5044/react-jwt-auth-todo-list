import { Button } from '@components/Lib';
import { theme } from '@theme';
import { styled } from '@utils';

export const StyledContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    button {
        background: none;
        border: none;
        padding: 0;
        margin: 0;
        outline: none;
        box-shadow: none;
        cursor: pointer;
    }

    img,
    svg {
        display: block;
        margin: 0;
        max-width: 100%;
    }
`;

export const TodoContainer = styled.div`
    position: relative;
    width: 100%;
    width: 90%;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-align: center;
    overflow: hidden;
`;

export const TodoHeader = styled.div`
    padding: 2rem;
    background-color: #ccc;
    background-image: linear-gradient(135deg, #79f1a4 10%, #0e5cad 100%);
`;

export const StyledInput = styled.input`
    display: block;
    padding: 1rem;
    margin: 0;
    outline: none;
    color: ${theme.colors.info.main};
    height: 2rem;
    width: 90.8%;
    border: none;
    font-size: 1.4rem;
    font-weight: 700;
    padding-right: 0.75rem;
`;

export const StyledButton = styled(Button)`
    background-color: transparent;
    color: ${theme.colors.info.dark};
    font-size: 2rem;
    &:hover {
        color: ${theme.colors.info.main};
        background-color: transparent;
        box-shadow: unset;
    }
`;

export const TodoForm = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    text-align: left;
    border-bottom: 1px solid #e9e9e9;
    padding-left: 1.5rem;
    padding-right: 1rem;
`;

export const TodoBody = styled.div`
    position: relative;
    padding: 2rem 2.5rem;
    height: 420px;
    overflow: auto;
`;
