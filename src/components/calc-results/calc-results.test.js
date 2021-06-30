import { render, screen, fireEvent } from '@testing-library/react';

import CalcResults from './calc-results.component';

const selectors = {
  first: 'first',
  second: 'second',
  ans: 'ans',
  op: 'op',
}

describe('calc', () => {
  test('it renders the components in the right initial state', () => {
    render(<CalcResults first="10" second="20" op="+" ans="30" />);

    expect(screen.getByTestId(selectors.first)).toHaveTextContent('10');
    expect(screen.getByTestId(selectors.second)).toHaveTextContent('20');
    expect(screen.getByTestId(selectors.op)).toHaveTextContent('+');
    expect(screen.getByTestId(selectors.ans)).toHaveTextContent('30');

  });




});