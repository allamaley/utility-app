import { render, screen, fireEvent } from '@testing-library/react';

import TodoList from './todo-list.component';


describe('todo  list testlc', () => {
  test('it renders the components in the right initial state for the title field', () => {
    const todos = [
      {
        id: 1,
        title: 'todo 1',
        createDate: new Date(2021, 4, 3),
      },
      {
        id: 2,
        title: 'todo 2',
        createDate: new Date(2021, 4, 10),
      },
    ]
    render(<TodoList todos={todos} />);
    expect(screen.getByText('Todo 1')).toBeInTheDocument();
  });

  test('it renders the components with no results', () => {
    const todos = [

    ]
    render(<TodoList todos={todos} />);
    expect(screen.getByText('No todos added here')).toBeInTheDocument();
  });

  // test case checkbox uncheck/check
  test('it sends out the right data in the outward handleChange function the components with no results', () => {
    let todoObj;
    let status;
    const handleChange = (todo, checked) => {
      todoObj = todo;
      status = checked;
    }
    const todos = [
      {
        id: 1,
        title: 'todo 1',
        createDate: new Date(2021, 4, 3),
      },
      {
        id: 2,
        title: 'todo 2',
        createDate: new Date(2021, 4, 10),
      },
    ]
    render(<TodoList todos={todos} handleChange={handleChange} />);

    fireEvent.click(screen.getByRole('checkbox', { name: todos[0].title }));

    expect(todoObj).toBe(todos[0]);
    expect(status).toBe(true);

    todoObj = null;

    fireEvent.click(screen.getByRole('checkbox', { name: todos[0].title }));

    expect(todoObj).toBe(todos[0]);
    expect(status).toBe(false);

    todoObj = null;
    status = false

    fireEvent.click(screen.getByRole('checkbox', { name: todos[1].title }));

    expect(todoObj).toBe(todos[1]);
    expect(status).toBe(true);
  });

});