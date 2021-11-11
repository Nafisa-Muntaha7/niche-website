import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Explore from './Pages/Explore/Explore/Explore';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/purchase">
              <Purchase />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
