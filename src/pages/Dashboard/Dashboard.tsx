import { Box } from '@components/Lib';
import Todo from '@components/Todo';
import { FC, memo } from 'react';

export const Dashboard: FC = memo(() => {
    return (
        <>
            <Box display="flex" flexDirection="column" gap="2rem">
                <Todo />
            </Box>
        </>
    );
});

Dashboard.displayName = 'Dashboard';
