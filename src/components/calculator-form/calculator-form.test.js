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
const moc_handleAnswer = () => {
  // switch (operator) {
  //   case '+': return arg1 + arg2;
  //   case '-': return arg1 - arg2;
  //   default: return arg1 * arg2;
  // }
}

describe('calculator-form-test-suite', () => {
  test('it renders the components in the right initial state', () => {
    render(<CalculatorForm
      firstNo='10'
      secondNo='20'
      ans='30'
      operation='+'
      handleChange={moc_handleChange}
      handleOperationChange={moc_handleOperationChange}
      handleAnswer={moc_handleAnswer}
    />);

    expect(screen.getByTestId(selectors.input.first)).toHaveValue('10');
    expect(screen.getByTestId(selectors.input.second)).toHaveValue('20');
    expect(screen.getByTestId(selectors.input.ans)).toHaveValue('30');
    expect(screen.getByTestId(selectors.button.calculate)).toBeEnabled();

  });

  test('it enables button based on input', () => {

    const { rerender } = render(<CalculatorForm
      firstNo=""
      secondNo='20'
      ans='30'
      handleChange={moc_handleChange}
    />);


    expect(screen.getByTestId(selectors.button.calculate)).toBeDisabled();

    rerender(<CalculatorForm
      firstNo="10"
      secondNo=''
      ans='30'
      handleChange={moc_handleChange}
    />)

    expect(screen.getByTestId(selectors.button.calculate)).toBeDisabled();
    
    rerender(<CalculatorForm
      firstNo="10"
      secondNo='20'
      ans='30'
      handleChange={moc_handleChange}
    />)
    expect(screen.getByTestId(selectors.button.calculate)).toBeEnabled();

  });


  test('it calculates based passed props and returns the answer in the callback function', () => {
    let actualAns;
    const moc_handleAnswer = (ans) => {
      actualAns = ans
    }
    render(<CalculatorForm
      firstNo='20'
      secondNo='30'
      operation='*'
      handleChange={moc_handleChange}
      handleAnswer={moc_handleAnswer}
    />);

    fireEvent.click(screen.getByTestId(selectors.button.calculate));
    expect(actualAns).toBe(600)
  
  });


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