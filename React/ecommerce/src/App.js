import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Components/HomePage/homepage'; 
import LoggingPage from './Components/loggingpage/SignUpPage'; 
import SignInPage from './Components/loggingpage/SignInPage';
import Cartpage from './Components/CartPage/cartpage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/register" component={LoggingPage} />
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/cart" component={Cartpage} />
      </Switch>
    </div>
  );
}

export default App;




