import { Box, Button, Text, Textfield } from '@Lib';
import { PageLayout } from '@components/Layout';
import { AppBar } from '@components/Layout/AppBar/AppBar';
import { useAuth } from '@context/AuthProvider';
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
            url: 'https://api.escuelajs.co/api/v1/auth/login',
            data: {
                email: 'john@mail.com',
                password: 'changeme',
            },
            method: 'POST',
        };

        if (username && pass) {
            setIsLoading(true);
            const { response, error } = await fetch(config);
            if (response) {
                console.log(response.data);
                return login?.({ tokens: response.data });
            }
            if (error) setError(error.data.message);
            setIsLoading(false);
        } else setError('Please enter valid email and password');
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
                    <Text textVariant="h4" textWeight="Strong">
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
                    <Text>{error}</Text>
                </StyledBox>
            </Box>
        </PageLayout>
    );
});

Auth.displayName = 'Auth';
