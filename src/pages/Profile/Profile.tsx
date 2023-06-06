import { Box, Text } from '@components/Lib';
import { useAuth } from '@context/AuthProvider';
import { FC, memo, useEffect } from 'react';
import { CardBox, StyledAvatar } from './styled';

export const Profile: FC = memo(() => {
    const { profileInfo, fetchProfileDetails } = useAuth();

    useEffect(() => {
        if (!profileInfo?.email) fetchProfileDetails?.();
    }, [fetchProfileDetails, profileInfo?.email]);
    return (
        <>
            <Box display="flex" flexDirection="column" gap="2rem" justifyContent="center">
                <Text textAlign="center" textVariant="h3">
                    Profile Page
                </Text>
                <CardBox display="flex" flexDirection="column" gap="2rem" alignItems="center">
                    <StyledAvatar src={profileInfo.avatar} alt="avatar" />
                    <Text textColor="#fff">
                        <strong>Name: </strong> {profileInfo.name}
                    </Text>
                    <Text textColor="#fff">
                        <strong>Email: </strong> {profileInfo.email}
                    </Text>
                    <Text textColor="#fff">
                        <strong>Role: </strong> {profileInfo.role}
                    </Text>
                </CardBox>
            </Box>
        </>
    );
});

Profile.displayName = 'Profile';
