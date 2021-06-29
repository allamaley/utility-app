import { render, screen, fireEvent } from '@testing-library/react';

import CalculatorForm from './calculator-form.component';

const selectors = {
  input: {
    first: 'firstNo',
    second: 'secondNo',
    ans: 'ans',
    operator: 'operator',
  },
  button: {
    calculate: 'calculate',

  }
}

describe('calculator-form-test-suite', () => {
  test('it renders the components in the right initial state', () => {
    render(<CalculatorForm egFirstNo="10" egSecondNo="20" egAns="30" />);

    expect(screen.getByTestId(selectors.input.first)).toHaveValue('10');
    expect(screen.getByTestId(selectors.input.second)).toHaveValue('20');
    expect(screen.getByTestId(selectors.input.ans)).toHaveValue('30');
    expect(screen.getByTestId(selectors.button.calculate)).toBeEnabled();

  });

  test('it enables button based on input', () => {
    render(<CalculatorForm egFirstNo="10" egSecondNo="20" egAns="30" />);

    fireEvent.change(screen.getByTestId(selectors.input.second), {
      target: { value: 'dhfk' }
    })
    expect(screen.getByTestId(selectors.button.calculate)).toBeDisabled();

    fireEvent.change(screen.getByTestId(selectors.input.second), {
      target: { value: '74' }
    })
    expect(screen.getByTestId(selectors.button.calculate)).toBeEnabled();

  })


  test('it calculates correct based on operator', () => {
    render(<CalculatorForm egFirstNo="10" egSecondNo="20" egAns="30" />);


    fireEvent.change(screen.getByTestId(selectors.input.first), {
      target: { value: '1' }
    })
    fireEvent.change(screen.getByTestId(selectors.input.operator), {
      target: { value: '+' }
    })
    fireEvent.change(screen.getByTestId(selectors.input.second), {
      target: { value: '2' }
    })

    fireEvent.click(screen.getByTestId(selectors.button.calculate))

    expect(screen.getByTestId(selectors.input.ans)).toHaveValue('3');


  })

});