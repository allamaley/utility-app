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

const moc_handleChange = () => {

}
const moc_handleOperationChange = () => {

}
const moc_handleAnswer = (arg1, arg2, operator) => {
  switch (operator) {
    case '+': return arg1 + arg2;
    case '-': return arg1 - arg2;
    default: return arg1 * arg2;
  }
}

describe('calculator-form-test-suite', () => {
  test('it renders the components in the right initial state', () => {
    render(<CalculatorForm
      firstNo='1'
      secondNo='2'
      ans='-1'
      operation='-'
      handleChange={moc_handleChange}
      handleOperationChange={moc_handleOperationChange}
      handleAnswer={moc_handleAnswer(1, 2, '+')}
    />);

    expect(screen.getByTestId(selectors.input.first)).toHaveValue('1');
    expect(screen.getByTestId(selectors.input.second)).toHaveValue('2');
    expect(screen.getByTestId(selectors.input.ans)).toHaveValue('-1');
    expect(screen.getByTestId(selectors.button.calculate)).toBeEnabled();

  });

  test('it enables button based on input', () => {
    render(<CalculatorForm
      firstNo='10'
      secondNo='20'
      ans='30'
      operation='+'
      handleChange={moc_handleChange}
      handleOperationChange={moc_handleOperationChange}
      handleAnswer={moc_handleAnswer(10, 20, '+')}
    />);

    fireEvent.change(screen.getByTestId(selectors.input.first), {
      target: { value: 'dhfk' }
    })
    expect(screen.getByTestId(selectors.button.calculate)).toBeDisabled();

    fireEvent.change(screen.getByTestId(selectors.input.first), {
      target: { value: '74' }
    })
    expect(screen.getByTestId(selectors.button.calculate)).toBeEnabled();

  })


  // test('it calculates correct based on operator', () => {
  //   render(<CalculatorForm
  //     firstNo='10'
  //     secondNo='20'
  //     ans='30'
  //     operation='+'
  //     handleChange={moc_handleChange}
  //     handleOperationChange={moc_handleOperationChange}
  //     handleAnswer={moc_handleAnswer(10,20,'+')}
  //   />);


  //   fireEvent.change(screen.getByTestId(selectors.input.first), {
  //     target: { value: '1' }
  //   })
  //   fireEvent.change(screen.getByTestId(selectors.input.operator), {
  //     target: { value: '+' }
  //   })
  //   fireEvent.change(screen.getByTestId(selectors.input.second), {
  //     target: { value: '2' }
  //   })

  //   fireEvent.click(screen.getByTestId(selectors.button.calculate))

  //   expect(screen.getByTestId(selectors.input.ans)).toHaveValue('3');


  // })

});