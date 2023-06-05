import { styled } from '@utils';

export const StyledItem = styled.li`
    display: flex;
    width: 100%;
    align-items: center;
    user-select: none;
    padding: 0.65rem 0;
    text-align: left;

    :first-child {
        padding-top: 0;
    }
    :last-child {
        padding-bottom: 0;
    }
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
    .task-item.done .task-item-text {
        color: #ccc;
    }
    .task-item .task-item-text::before {
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
    .task-item-remove {
        flex-shrink: 0;
        line-height: 0;
        transition: 0.2s ease;
        opacity: 0;
    }
    .task-item:hover .task-item-remove {
        opacity: 1;
    }
    .task-item-remove button {
        border-radius: 50%;
        color: #ccc;
        transition: 0.2s ease;
    }
    .task-item-remove button:hover {
        color: tomato;
    }
`;
