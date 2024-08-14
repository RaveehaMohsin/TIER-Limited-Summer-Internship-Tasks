import './App.css';
import {Switch , Route} from "react-router-dom"
import Form from './Components/Form/form';

function App() {
  return (
    <div className="App">
      <Switch>
       <Route exact-path="/" component={Form}/>
      </Switch>
    </div>
  );
}

export default App;
