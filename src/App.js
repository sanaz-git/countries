import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

//Context
import CountryContextProvider from './context/CountryContextProvider';

//Component
import HomePage from './components/HomePage';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <div className="App">
      <CountryContextProvider>
        <Navbar />
        <Switch>
          <Route path="/countries/:id" component={CountryDetails} />
          <Route path="/countries" component={HomePage} />
          <Redirect to="/countries" />
        </Switch>
      </CountryContextProvider>
    </div>
  );
}

export default App;
