import { useLocalStorage } from '@hooks/useLocalStorage';
import { FC, PropsWithChildren, createContext, useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthContext } from './types';

const initialValue = { tokens: {}, profileInfo: {} };

const AuthContext = createContext<IAuthContext>(initialValue);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', initialValue);
    const navigate = useNavigate();

    const login = async (data: any) => {
        console.log({ data });
        setUser(data);
        navigate('/profile', { replace: true });
    };

    const logout = () => {
        setUser(null);
        navigate('/', { replace: true });
    };

    const value = useMemo(
        () => ({
            ...user,
            login,
            logout,
        }),
        [user],
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
