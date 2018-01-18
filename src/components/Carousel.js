import React from 'react';
import Profile from './Profile';

class Carousel extends React.Component{
    render(){
        return(
            <div className="carousel">
                <Profile className="profile" />
            </div>
        )
    }
}

export default Carousel;