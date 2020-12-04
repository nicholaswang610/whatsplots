import "./Styles/App.css"
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Home';

const App = () => {
  return (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
      </Switch>
    </BrowserRouter>
  </div>);
}

export default App;
