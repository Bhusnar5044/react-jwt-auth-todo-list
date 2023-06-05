import { ErrorBoundary } from '@components/Layout';
import { AuthProvider } from '@context/AuthProvider';
import { Routes } from '@routes';
import { store } from '@store';
import { theme } from '@theme';
import { ThemeProvider } from '@utils';
import { FC } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <BrowserRouter>
                    <AuthProvider>
                        <ErrorBoundary>
                            <Routes />
                        </ErrorBoundary>
                    </AuthProvider>
                </BrowserRouter>
            </Provider>
        </ThemeProvider>
    );
};

export default App;
