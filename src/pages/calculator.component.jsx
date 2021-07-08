import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CalculatorForm from '../components/calculator-form/calculator-form.component'
import CalcResults from '../components/calc-results/calc-results.component'


function Calculator({ shouldFetchDefaultData = true, todos }) {

  const [calcData, setCalcData] = useState({
    firstNo: '',
    secondNo: '',
    ans: '',
    operation: '',
  });

  useEffect(() => {
    if (!shouldFetchDefaultData) { return }
    const url = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';

    const fetchDefaultData = async () => {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setCalcData(jsonResponse);
    };

    fetchDefaultData();

    return () => {
      // clean up code on ComponentUnmount
      console.log('returned here')
    }
  }, []); //empty array of dependencies - ensures that side effect is executed only once when the component first renders



  const handleChange = e => {
    const { name, value } = e.target;
    setCalcData({ ...calcData, [name]: value });
  }

  const handleOperationChange = ({ target: { value } }) => {
    setCalcData({ ...calcData, operation: value });
  }

  const handleAnswer = ans => {
    setCalcData({ ...calcData, ans });
  }

  const { firstNo, secondNo, ans, operation } = calcData;

  return (
    <div>
      <CalculatorForm
        firstNo={firstNo}
        secondNo={secondNo}
        ans={ans}
        operation={operation}
        handleChange={handleChange}
        handleOperationChange={handleOperationChange}
        handleAnswer={handleAnswer}
      />
      <CalcResults
        first={firstNo}
        second={secondNo}
        op={operation}
        ans={ans}
      />
      <h2>top 3 todos:</h2>
      <ul>

      </ul>
      {todos.length ?
        todos.map(({ id, title }) => (<li key={id}>{title}</li>))
        : <span>No todos left</span>}
    </div>
  )

}

const mapStateToProps = ({ todosReducer: { todos } }) => ({
  todos: todos.length ? todos.slice(0, 3) : [],
})

export default connect(mapStateToProps)(Calculator);