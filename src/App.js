import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './store';
import Home from './screens/Home';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => {
 return (
   <Provider store={store}>
     <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
      </div>
     </BrowserRouter>
  </Provider>
  );
};

export default App;
