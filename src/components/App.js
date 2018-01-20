import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Carousel from './Carousel';
import Account from './Account';

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Account className="account" />
            </div>
        )
    }

                // <Header className="top"  />
                // <Carousel className="profile" />
}

export default App;