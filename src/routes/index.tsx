import ContainerLoader from '@components/Loader';
import Auth from '@pages/Auth';
// import Dashboard from '@pages/Dashboard';
import Dashboard from '@pages/Dashboard';
import Profile from '@pages/Profile';
import { FC, Suspense } from 'react';
import { Route, Routes as RoutesWrapper } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';

export const Routes: FC = () => {
    return (
        <Suspense fallback={<ContainerLoader />}>
            <RoutesWrapper>
                <Route path="/" element={<ProtectedRoutes />}>
                    <Route path="" element={<Dashboard />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="/login" element={<Auth />} />
            </RoutesWrapper>
        </Suspense>
    );
};
