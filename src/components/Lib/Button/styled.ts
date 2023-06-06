import { styled } from '@utils';
import { Props } from './types';

export const ButtonContainer = styled.button<Props>`
    display: inline-block;
    outline: 0;
    cursor: pointer;
    text-align: center;
    border: 0;
    padding: 1rem 2rem;
    color: #fff;
    background: #008060;
    border-radius: 0.8rem;
    font-weight: 500;
    font-size: 1.4rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 0px 0px, rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset;
    &.disabled {
        opacity: 0.7;
        pointer-events: none;
    }
    :hover {
        background: #006e52;
    }
`;
