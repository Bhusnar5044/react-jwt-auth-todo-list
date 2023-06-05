import { initialState } from '@store';
import { rootSaga } from '@store/sagas';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { theme } from '@theme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import reduxMockStore from 'redux-mock-store';
import reduxSaga from 'redux-saga';
import { ThemeProvider } from './styled';

export const mockAxios = new MockAdapter(axios);

const sagaMiddleware = reduxSaga();

const mockStore = reduxMockStore([sagaMiddleware]),
    store = mockStore({ ...initialState });
sagaMiddleware.run(rootSaga);

const WithThemeProvider: FC<PropsWithChildren> = (props) => (
    <ThemeProvider theme={theme}>
        <>{props.children}</>
    </ThemeProvider>
);

const WithStore: FC<PropsWithChildren> = (props) => (
    <Provider store={store}>
        <WithThemeProvider>{props.children}</WithThemeProvider>
    </Provider>
);

const WithRouter: FC<PropsWithChildren> = (props) => (
    <MemoryRouter>
        <WithThemeProvider>{props.children}</WithThemeProvider>
    </MemoryRouter>
);

const WithStoreAndRouter: FC<PropsWithChildren> = (props) => (
    <Provider store={store}>
        <MemoryRouter>
            <WithThemeProvider>{props.children}</WithThemeProvider>
        </MemoryRouter>
    </Provider>
);

const customRender = (ui: ReactElement<any>, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithThemeProvider, ...options });

export const renderWithStore = (ui: ReactElement<any>, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithStore, ...options });

export const renderWithRouter = (ui: ReactElement<any>, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithRouter, ...options });

export const renderWithStoreAndRouter = (ui: ReactElement<any>, options?: RenderOptions): RenderResult =>
    render(ui, { wrapper: WithStoreAndRouter, ...options });

// re-export everything
export * from '@testing-library/react';
// override render method
export { customRender as render, store, userEvent };
