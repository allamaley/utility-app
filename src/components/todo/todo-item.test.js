import { render, screen, fireEvent } from '@testing-library/react';

import TodoItem from './todo-item.component';

const selectors = {
  title: "title",
  date: "date",
}

describe('catodo item testlc', () => {
  test('it renders the components in the right initial state for the title field', () => {
    const todo = {
      title: 'todo 1',
      createDate: new Date(2021, 4, 3),
    }
    render(<TodoItem todo={todo} />);
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByTestId(selectors.date)).toHaveTextContent('03-05-2021');

  });

  test('it sends the handleChange signal to the parent', () => {
    const todo = {
      title: 'todo 1',
      createDate: new Date(2021, 4, 3),
    }
    let handleChangeCalled
    const handleChange = (e) => {
      handleChangeCalled = true
    }
    render(<TodoItem todo={todo} handleChange={handleChange} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(handleChangeCalled).toBeTruthy();

  });
});