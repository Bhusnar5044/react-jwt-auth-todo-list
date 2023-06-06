import { FC, PropsWithChildren, memo } from 'react';
import Text from '../Text';
import { ButtonContainer } from './styled';
import { Props } from './types';

export const Button: FC<PropsWithChildren & Props> = memo(({ children, disabled, as, onClick, loading, ...props }) => {
    return (
        <ButtonContainer as={as} onClick={onClick} loading={loading} className={disabled ? 'disabled' : ''} {...props}>
            <Text {...props}>{children}</Text>
        </ButtonContainer>
    );
});

Button.displayName = 'Button';
Button.defaultProps = {
    type: 'button',
};
