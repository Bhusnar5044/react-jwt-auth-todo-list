import { Box, Text } from '@components/Lib';
import { useAuth } from '@context/AuthProvider';
import { FC, memo } from 'react';
import { HeaderContainer, HeaderContent, Logo, StyledLink } from './AppBar.styled';

export const AppBar: FC = memo(() => {
    const { tokens, logout } = useAuth();
    const handleLogout = () => {
        logout?.();
    };
    return (
        <HeaderContainer>
            <HeaderContent>
                <Box gap="2rem" alignItems="center">
                    <Logo src="/vite.svg" />
                    <Text>React JWT Demo</Text>
                </Box>
                <Box gap="2rem" alignItems="center">
                    <StyledLink to={'/'}>
                        <Text>Dashboard</Text>
                    </StyledLink>
                    <StyledLink to={'/profile'}>
                        <Text>Profile</Text>
                    </StyledLink>
                    {tokens?.access_token && (
                        <Text as={'a'} onClick={handleLogout}>
                            Logout
                        </Text>
                    )}
                </Box>
            </HeaderContent>
        </HeaderContainer>
    );
});

AppBar.displayName = 'AppBar';
