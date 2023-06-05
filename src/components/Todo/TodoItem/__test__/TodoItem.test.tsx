import { render } from '@test-utils';
import { TodoItem } from '../TodoItem';

describe('TodoItem', () => {
    it('should render properly', () => {
        const { container } = render(
            <TodoItem
                taskId={0}
                task={{
                    text: '',
                    done: false,
                }}
                setTasks={jest.fn()}
            />,
        );
        expect(container).toMatchSnapshot();
    });
});
