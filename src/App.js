import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createContext, useState } from 'react';

//Context
import CountryContextProvider from './context/countryContextProvider';

//Component
import HomePage from './components/HomePage';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/shared/Navbar';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <CountryContextProvider>
          <Navbar btn={toggleTheme} theme={theme} />
          <Switch>
            <Route path="/countries/:name" component={CountryDetails} />
            <Route path="/countries" component={HomePage} />
            <Redirect to="/countries" />
          </Switch>
        </CountryContextProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
