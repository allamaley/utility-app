import { render, screen, fireEvent } from '@testing-library/react';

import TaskList from './tasklist.component';


describe('task  list testlc', () => {
  test('it adds the new todo to the list', () => {

    render(<TaskList />);
    expect(screen.getByText('No todos added here')).toBeInTheDocument();

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo1' }
    });
    fireEvent.click(screen.getByText('Save'));
    expect(screen.getByText('Todo1')).toBeInTheDocument();

  });


  test('it increments/decrements the clear completed todos counter', () => {

    render(<TaskList />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo1' }
    });
    fireEvent.click(screen.getByText('Save'));
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo2' }
    });
    fireEvent.click(screen.getByText('Save'));

    expect(screen.getByText('(0)')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('checkbox', { name: 'todo1' }));
    expect(screen.getByText('(1)')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('checkbox', { name: 'todo2' }));
    expect(screen.getByText('(2)')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('checkbox', { name: 'todo1' }));
    expect(screen.getByText('(1)')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('checkbox', { name: 'todo2' }));
    expect(screen.getByText('(0)')).toBeInTheDocument();

  });



  test('it enables/disabled the clear completed todos button', () => {

    render(<TaskList />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo1' }
    });
    fireEvent.click(screen.getByText('Save'));
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo2' }
    });
    fireEvent.click(screen.getByText('Save'));
    expect(screen.getByText('Clear completed todos')).toBeDisabled();

    expect(screen.getByText('(0)')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('checkbox', { name: 'todo1' }));
    expect(screen.getByText('(1)')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('checkbox', { name: 'todo2' }));
    expect(screen.getByText('(2)')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('checkbox', { name: 'todo1' }));
    expect(screen.getByText('(1)')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('checkbox', { name: 'todo2' }));
    expect(screen.getByText('(0)')).toBeInTheDocument();
    expect(screen.getByText('Clear completed todos')).toBeDisabled();

  });

  test('it removes checked item from the todo list', () => {

    render(<TaskList />);

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo1' }
    });
    fireEvent.click(screen.getByText('Save'));

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'todo2' }
    });
    fireEvent.click(screen.getByText('Save'));

    fireEvent.click(screen.getByRole('checkbox', { name: 'todo1' }));

    fireEvent.click(screen.getByText('Clear completed todos'));

    expect(screen.queryAllByText('todo1')).toHaveLength(0);

  });
});