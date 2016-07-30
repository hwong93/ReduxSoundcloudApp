import React from 'react';
import SC from 'soundcloud';s
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import { Provider } from 'react-redux';
import * as actions from './actions';
import Stream from './components/Stream';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/App';
import Callback from './components/Callback';

const tracks = [
  {
    title: 'Some title'
  },
  {
    title: 'Some other Track'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store} >
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Stream}/>
        <Route path='/' component={Stream}/>
        <Route path='/callback' component={Callback}/>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
