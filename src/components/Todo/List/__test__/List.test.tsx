import { render } from '@test-utils';
import { List } from '../List';

describe('List', () => {
    it('should render properly', () => {
        const { container } = render(<List />);
        expect(container).toMatchSnapshot();
    });
});
