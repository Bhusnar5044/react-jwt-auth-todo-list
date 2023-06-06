import { TextProps } from '../Text/types';

export interface Props extends TextProps {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    onClick?: () => void;
    loading?: boolean;
}
