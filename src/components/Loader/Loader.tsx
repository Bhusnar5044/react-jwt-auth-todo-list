import { FC, memo } from 'react';
import { StyledLoader } from './styled';

export const Loader: FC = memo(() => {
    return <StyledLoader src="/reactLogo.svg" title="loader" />;
});

Loader.displayName = 'Loader';
