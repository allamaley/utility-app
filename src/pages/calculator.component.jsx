
import { Component } from 'react'

import CalculatorForm from '../components/calculator-form/calculator-form.component'
import CalcResults from '../components/calc-results/calc-results.component'

class Calculator extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstNo: '10',
      secondNo: '20',
      ans: '30',
      operation: '+',
    };

  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleOperationChange = ({ target: { value } }) => {
    this.setState({
      operation: value
    })
  }

  handleAnswer = ans => {
    this.setState({
      ans,
    })
  }

  render() {
    return (
      <div>
        <CalculatorForm
          firstNo={this.state.firstNo}
          secondNo={this.state.secondNo}
          ans={this.state.ans}
          operation={this.state.operation}
          handleChange={this.handleChange}
          handleOperationChange={this.handleOperationChange}
          handleAnswer={this.handleAnswer}
        />
        <CalcResults
          first={this.state.firstNo}
          second={this.state.secondNo}
          op={this.state.operation}
          ans={this.state.ans}
        />
      </div>
    )
  }

}
export default Calculator;