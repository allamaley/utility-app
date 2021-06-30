import './calc-results.styles.scss';

function CalcResults({ first, second, op, ans }) {
  return (
    <div className="calc-results">
      <p>
        First no entered: <i data-testid="first">{first}</i>
      </p>
      <p>
        Operation selected: <i data-testid="op">{op}</i>
      </p>
      <p>
        Second no entered: <i data-testid="second">{second}</i>
      </p>
      <p>
        Ans: <i data-testid="ans">{ans}</i>
      </p>
    </div>
  )
}

export default CalcResults;