import { render } from '@test-utils';
import { Auth } from '../Auth';

describe('Auth Page', () => {
    it('should render properly', () => {
        const { container } = render(<Auth />);
        expect(container).toMatchSnapshot();
    });
});
