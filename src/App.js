import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Pages/Login/Login/Login';
import Home from './Pages/Home/Home/Home';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Explore from './Pages/Explore/Explore/Explore';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import { CartProvider } from 'react-use-cart';
import PlaceOrder from './Pages/Purchase/PlaceOrder/PlaceOrder';
import Shipping from './Pages/Purchase/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/explore">
                <Explore />
              </Route>
              <PrivateRoute exact path="/purchase">
                <Purchase />
              </PrivateRoute>
              <PrivateRoute exact path="/purchase/:purchaseId">
                <Shipping />
              </PrivateRoute>
              <PrivateRoute exact path="/place-order">
                <PlaceOrder />
              </PrivateRoute>
              <PrivateRoute exact path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
            </Switch>
          </Router>
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
