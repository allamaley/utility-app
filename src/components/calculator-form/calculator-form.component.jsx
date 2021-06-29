import { Component } from 'react'
import './calculator-form.styles.scss';

class CalculatorForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isDisabled: false,
      firstNo: props.egFirstNo,
      secondNo: props.egSecondNo,
      ans: props.egAns,
    };

  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      isDisabled: !value || isNaN(parseInt(value))
    });
  }

  handleOperationChange = ({ target: { value } }) => {
    this.operation = value;
  }

  calculate = () => {
    const { operation } = this;
    const { firstNo, secondNo } = this.state;

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

    this.setState({
      ans,
    })
  }

  render() {


    return (
      <div className="calculator-form" >
        <div className="row">
          <input type="text" data-testid="firstNo" onChange={this.handleChange} name="firstNo" placeholder="Enter no" value={this.state.firstNo} />
          <select name="operator" onChange={this.handleOperationChange} data-testid="operator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
          </select>
          <input type="text" data-testid="secondNo" onChange={this.handleChange} name="secondNo" placeholder="Enter second no" value={this.state.secondNo} />
        </div>
        <div className="row">
          <button disabled={this.state.isDisabled} onClick={this.calculate} data-testid="calculate">Calculate</button>
        </div>
        <div className="row">
          <input type="text" data-testid="ans" name="ans" readOnly value={this.state.ans} />
        </div>
      </div>
    )
  }

}
export default CalculatorForm;