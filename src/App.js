import './App.css';
import AuthProvider from './context/AuthProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import Dashboard from './Component/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

      
          <Route path="/dashboard">
<Dashboard></Dashboard>
          </Route>

          
          </Switch>
        </Router>
     
      </AuthProvider>


    </div>
  );
}

export default App;