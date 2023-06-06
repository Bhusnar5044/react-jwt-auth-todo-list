import { styled } from '@utils';

export const StyledEmpty = styled.div`
    margin-top: 2rem;
    p {
        margin: 0;
        margin-bottom: 1rem;
    }
    svg {
        display: inline-block;
        width: 50px;
        opacity: 0.5;
    }
`;

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    list-style: none;
    margin: 0;
    padding: 0;
`;
