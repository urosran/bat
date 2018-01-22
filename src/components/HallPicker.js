import React from 'react';
import Header from './Header';

class HallPicker extends React.Component{
    render(){
        return(

            <div className="general">
                <Header />
                <div className="HallPicker">
                <h2> Please select the dining hall </h2>
                    <select multiple className="selector">
                        <option value="sherman">Sherman</option>
                        <option value="usdan">Usdan</option>
                    </select>
                    <button type="submit" className="btn" ref='./App'> See who's there </button>
                </div>
            </div>

        )
    }
}

export default HallPicker;