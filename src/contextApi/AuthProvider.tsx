import { useLocalStorage } from '@hooks/useLocalStorage';
import { FC, PropsWithChildren, createContext, useCallback, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthContext } from './types';

const initialValue = { tokens: {}, profileInfo: {} };

const AuthContext = createContext<IAuthContext>(initialValue);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialValue);
    const navigate = useNavigate();

    const login = useCallback(
        async (data: any) => {
            console.log({ data });
            setUser(data);
            navigate('/', { replace: true });
        },
        [navigate, setUser],
    );

    const logout = useCallback(() => {
        setUser(null);
        navigate('/', { replace: true });
    }, [navigate, setUser]);

    const value = useMemo(
        () => ({
            ...user,
            login,
            logout,
        }),
        [login, logout, user],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
