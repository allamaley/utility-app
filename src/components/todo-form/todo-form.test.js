import { render, screen, fireEvent } from '@testing-library/react';

import TodoForm from './todo-form.component';

describe('todo  liformst testlc', () => {

  test('it renders the components in the right initial state', () => {

    render(<TodoForm />);
    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByRole('button')).toBeDisabled();
  });

  test('it enables/disables button appropriately', () => {

    render(<TodoForm />);
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo1' }
    });
    expect(screen.getByRole('button')).toBeEnabled();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: '' }
    });
    expect(screen.getByRole('button')).toBeDisabled();



  });


  test('it adds a new todo', () => {
    let todoText;
    const onNewTodo = (newTodo) => {
      todoText = newTodo;
    }
    render(<TodoForm onNewTodo={onNewTodo} />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo1' }
    });

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByRole('button')).toBeDisabled();
    expect(todoText).toBe('todo1');


  });

});