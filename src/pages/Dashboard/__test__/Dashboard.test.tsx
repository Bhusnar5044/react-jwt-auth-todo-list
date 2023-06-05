import { renderWithStore } from '@test-utils';
import { Dashboard } from '../Dashboard';

describe('Dashboard', () => {
    it('should render properly', () => {
        const { container } = renderWithStore(<Dashboard />);
        expect(container).toMatchSnapshot();
    });
});
