import { Box, Button } from '@components/Lib';
import { theme } from '@theme';
import { styled } from '@utils';
import { StyledButton } from '../styled';

export const RemoveButton = styled(StyledButton)`
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    outline: none;
    box-shadow: none;
    opacity: 0;
    color: ${theme.colors.info.dark};
    transition: 0.2s ease;
    margin-right: 1rem;
    &:hover {
        color: ${theme.colors.info.main};
    }
`;

export const AddSUbTaskButton = styled(Button)`
    font-size: 0.8em;
    line-height: 1.4rem;
    padding: 0.5rem;
`;

export const StyledItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    align-items: center;
    user-select: none;
    padding: 0.65rem 0.5rem;
    text-align: left;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    .task-item-infos {
        flex: 1;
        display: flex;
        align-items: center;
        min-width: 0;
        margin-right: 1rem;
    }
    .task-item-checkbox {
        flex-shrink: 0;
        margin: 0;
        margin-right: 0.75rem;
        line-height: 0;
        cursor: pointer;
    }
    .task-item-checkbox input {
        display: none;
    }
    .task-item-checkbox-el {
        position: relative;
        display: inline-flex;
        width: 22px;
        height: 22px;
        border: 2px solid #ccc;
        border-radius: 50%;
        transition: 0.3s;
    }
    .task-item-checkbox-el:hover {
        border-color: #999;
    }
    .task-item-checkbox-el::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 6px;
        width: 7px;
        height: 12px;
        border-style: solid;
        border-color: white;
        border-width: 0 2px 2px 0;
        transform: rotate(65deg);
        transition: 0.3s;
    }
    .task-item-checkbox input:checked + .task-item-checkbox-el {
        background-color: #6bffa0;
        border-color: #6bffa0;
    }
    .task-item-checkbox input:checked + .task-item-checkbox-el::before {
        transform: rotate(45deg);
    }
    .task-item-text {
        position: relative;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 700;
        transition: 0.3s ease;
    }
    &.task-item.done .task-item-text {
        color: #ccc;
    }
    &.task-item .task-item-text::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        max-width: 0;
        height: 1px;
        background-color: #999;
        transition: 0.3s 0.1s;
    }
    .task-item.done .task-item-text::before {
        max-width: 100%;
    }

    &:hover ${RemoveButton} {
        opacity: 1;
    }
`;

export const StyledItemWrapper = styled(Box)`
    width: 100%;
`;
