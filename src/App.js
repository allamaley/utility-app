import './App.css';
import CalculatorForm from './components/calculator-form/calculator-form.component';

function App() {
  return (
    <div className="App">
      <CalculatorForm egFirstNo="5" egSecondNo="6" egAns="11" />
    </div>
  );
}

export default App;
