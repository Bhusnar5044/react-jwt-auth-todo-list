import { FC, forwardRef, memo } from 'react';
import { Input, InputWrapper, Label } from './styled';
import { Props } from './types';

export const Textfield: FC<Props> = memo(
    forwardRef<HTMLInputElement, Props>(({ label, minWidth, fullWidth, ...props }, ref) => {
        return (
            <InputWrapper {...{ minWidth, fullWidth }}>
                <Input ref={ref} type="text" {...props} />
                <Label>{label}</Label>
            </InputWrapper>
        );
    }),
);

Textfield.displayName = 'Textfield';