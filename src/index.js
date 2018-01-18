import React from 'react';
import ReactDOM, { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './css/style.css';

import App from './components/App';
import HallPicker from './components/HallPicker'




ReactDOM.render(<App />, document.getElementById('main'));
registerServiceWorker();
