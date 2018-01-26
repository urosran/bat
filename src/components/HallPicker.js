import React from 'react';
import Header from './Header';
import { Switch, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import App from './App';
import Account from './Account';


//https://scotch.io/tutorials/routing-react-apps-the-complete-guide
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// https://reacttraining.com/react-router/web/api/Route

class HallPicker extends React.Component{

     constructor(props) {
        super(props);
        this.state = {value: 'usdan'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        this.setState({value: event.target.value});
      }
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
        if(this.state.value==='usdan'){
            <Link to='./usdan'></Link>
            alert('Your favorite flavor is: ' + this.state.value);

        }

        <Switch>
            <Route path={this.state.value} Component={App} />
            <Route path='/sherman' Component={Account} />
        </Switch>




      }

    render(){
        return (
            <div className="general">
            <Header />
                <div className='HallPicker'>
                    <form onSubmit={this.handleSubmit} className='selector'>
                        <label>
                            <p> <b> Choose your dining hall: </b> </p>
                            <select className="selector" value={this.state.value} onChange={this.handleChange}>
                                <option value="usdan">Usdan</option>
                                <option value="sherman">Sherman</option>
                            </select>
                        </label>
                        <input type="submit" value="See who's there" className='btn' />
                    </form>

                </div>
            </div>
        )
    }
}
export default HallPicker;
