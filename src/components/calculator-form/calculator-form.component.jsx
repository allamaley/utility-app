import './calculator-form.styles.scss';

function CalculatorForm({ firstNo, secondNo, ans, operation, handleChange, handleOperationChange, handleAnswer }) {

  const calculate = () => {
    const iFirstNo = parseInt(firstNo);
    const iSecondNo = parseInt(secondNo);

    let ans;
    switch (operation) {
      case '+': ans = iFirstNo + iSecondNo;
        break;
      case '-': ans = iFirstNo - iSecondNo;
        break;
      default: ans = iFirstNo * iSecondNo;
    }

    handleAnswer(ans);
  }

  const isDisabled = !firstNo || !secondNo || isNaN(parseInt(secondNo)) || isNaN(parseInt(firstNo))

  return (
    <div className="calculator-form" >
      <div className="row">
        <input type="text" data-testid="firstNo" onChange={handleChange} name="firstNo" placeholder="Enter no" value={firstNo} />
        <select name="operator" onChange={handleOperationChange} data-testid="operator">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
        </select>
        <input type="text" data-testid="secondNo" onChange={handleChange} name="secondNo" placeholder="Enter second no" value={secondNo} />
      </div>
      <div className="row">
        <button onClick={calculate} disabled={isDisabled} data-testid="calculate">Calculate</button>
      </div>
      <div className="row">
        <input type="text" data-testid="ans" name="ans" readOnly value={ans} />
      </div>
    </div>
  )

}
export default CalculatorForm;