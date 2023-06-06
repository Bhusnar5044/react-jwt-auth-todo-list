import { Box, Button, Text, Textfield } from '@Lib';
import { PageLayout } from '@components/Layout';
import { AppBar } from '@components/Layout/AppBar/AppBar';
import { urls } from '@constant/urls';
import { useAuth } from '@context/AuthProvider';
import { theme } from '@theme';
import { fetch } from '@utils';
import { ChangeEvent, FC, memo, useCallback, useEffect, useState } from 'react';
import { StyledBox } from './styled';

export const Auth: FC = memo(() => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (name === 'username') setUsername(value);
        else setPass(value);
    }, []);
    const handleSubmit = useCallback(async () => {
        // mock API fixed email pass
        const config = {
            url: urls.login,
            data: {
                email: username,
                password: pass,
            },
            method: 'POST',
        };

        setIsLoading(true);

        const { response, error } = await fetch(config, '', true);

        if (response) return login?.({ tokens: response.data });
        if (error) {
            console.log(error.data.message);
            setError('Please enter valid email and password');
        }

        setIsLoading(false);
    }, [login, pass, username]);

    useEffect(() => {
        if (username && pass) setIsDisabled(false);
    }, [pass, username]);

    return (
        <PageLayout>
            <AppBar />
            <Box flexDirection="column" gap="2rem" justifyContent="center" alignItems="center">
                <Text textVariant="h3" textWeight="Medium">
                    Auth Page
                </Text>
                <StyledBox flexDirection="column" gap="3rem" justifyContent="center" alignItems="center">
                    <Text textColor="#fff" textVariant="h4" textWeight="Strong">
                        Login
                    </Text>
                    <Textfield
                        fullWidth
                        type="text"
                        label="Username"
                        name="username"
                        value={username}
                        onChange={onChange}
                    />
                    <Textfield
                        fullWidth
                        type="password"
                        label="Password"
                        name="pass"
                        value={pass}
                        onChange={onChange}
                    />
                    <Button onClick={handleSubmit} disabled={isDisabled} loading={isLoading}>
                        Login
                    </Button>
                    <Text textColor={theme.colors.error.light}>{error}</Text>
                </StyledBox>
            </Box>
        </PageLayout>
    );
});

Auth.displayName = 'Auth';
