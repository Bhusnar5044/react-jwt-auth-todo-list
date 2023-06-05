import { render } from '@test-utils';
import { List } from '../List';

describe('List', () => {
    it('should render properly', () => {
        const { container } = render(<List tasks={[]} setTasks={jest.fn()} />);
        expect(container).toMatchSnapshot();
    });
});
