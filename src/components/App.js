import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Carousel from './Carousel';

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Header className="top"  />
                <Carousel className="profile" />
            </div>
        )
    }
}

export default App;