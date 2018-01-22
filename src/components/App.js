import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Carousel from './Carousel';
import Account from './Account';

import fakeData from '../fakeData.json';

const data = fakeData;


class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Header className="top"  />
                <Carousel data={data} className="profile" />
            </div>
        )
    }

    // <Account className="account" />
                // <Header className="top"  />
                // <Header className="top"  />
}

export default App;