import { render, screen } from '@test-utils';
import { AppBar } from '../AppBar';

describe('AppBar', () => {
    it('should render properly', () => {
        const { container } = render(<AppBar />);
        expect(container).toMatchSnapshot();
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});
