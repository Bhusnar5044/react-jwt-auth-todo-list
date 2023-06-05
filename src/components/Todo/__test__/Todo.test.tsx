import { render } from '@test-utils';
import { Todo } from '../Todo';

describe('Todo', () => {
    it('should render properly', () => {
        const { container } = render(<Todo />);
        expect(container).toMatchSnapshot();
    });
});
