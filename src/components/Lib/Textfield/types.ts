import { ChangeEvent } from 'react';

export interface InputWrapperProps {
    for?: string;
    fullWidth?: boolean;
    minWidth?: string;
}
export interface Props extends InputWrapperProps {
    label: string;
    name?: string;
    value: any;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    disabled?: boolean;
}
