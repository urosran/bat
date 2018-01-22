//elements
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//css
import './css/style.scss';
//components
import App from './components/App';
import HallPicker from './components/HallPicker'


const NoMatch = () => {
    return(<h1>404 DINASOUR</h1>)
}

const Root = () => {
    return(
        // <div className="uros">
    <Router>
        <Switch>
            <Route exact path='/' component={HallPicker} />
            <Route exact path='/App' component={App} />
            <Route component={NoMatch}/>
        </Switch>
    </Router>
    )
}





ReactDOM.render(<Root />, document.getElementById('main'));
registerServiceWorker();
