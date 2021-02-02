import './App.css';
import Login from './component/login';
import Register from './component/Register';
import Profile from './component/profile';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dash" component={Profile} />
        <Route path="/" component={Register} />

        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
