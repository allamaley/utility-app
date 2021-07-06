
import { Component } from 'react'

import CalculatorForm from '../components/calculator-form/calculator-form.component'
import CalcResults from '../components/calc-results/calc-results.component'

class Calculator extends Component {

  constructor(props) {
    super(props);
    console.log('constructor')

    this.state = {
      firstNo: '',
      secondNo: '',
      ans: '',
      operation: '',
    };

  }

  //lifecycle methods (noly availible in class based components)

  async componentDidMount() {
    //api calls for the data?
    console.log('componentDidMount')
    const url = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';
    const response = await fetch(url);
    const jsonResponse = await response.json();
    this.setState(jsonResponse)
  }

  componentDidUpdate() {
    //whenever state/props change in compoennt
    console.log('componentDidUpdate() in calculator')
  }

  componentWillUnmount() {
    //clear up/close resources
    console.log('componentWillUnmount() in calculator')
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    //this causes render to run
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
    console.log('render() in calculator')
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