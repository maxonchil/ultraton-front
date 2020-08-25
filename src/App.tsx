import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/organisms/Header/Header';

import MainPage from './pages/MainPage/MainPage';
import Footer from './components/organisms/Footer/Footer';
import Registration from './pages/Registration/Registration';
import LogIn from './pages/LogIn/LogIn';

// import { Provider } from 'react-redux';
// import { store } from './stores';

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LogIn} />
          <Route path="/register" component={Registration} />
        </Switch>
        <Footer />
      </Router>

      {/* </Provider> */}
    </div>
  );
}

export default App;
