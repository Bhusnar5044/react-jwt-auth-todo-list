import { Box, Text } from '@components/Lib';
import { FC, memo } from 'react';

export const Profile: FC = memo(() => {
    return (
        <>
            <Box display="flex" flexDirection="column" gap="2rem" justifyContent="space-between">
                <Text>Profile Page</Text>
            </Box>
        </>
    );
});

Profile.displayName = 'Profile';
