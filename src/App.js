import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Home from './screens/Home';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => {
 return (
   <Provider store={store}>
     <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
     </BrowserRouter>
  </Provider>
  );
};

export default App;
