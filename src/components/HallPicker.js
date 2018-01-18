import React from 'react';

class HallPicker extends React.Component{
    render(){
        return(
             <div className="HallPicker">
                <h2> Please select the dining hall </h2>
                <select multiple className="Selector">
                    <option value="sherman">Sherman</option>
                    <option value="usdan">Usdan</option>
                </select>
                <button type="submit" className="btn"> See who's there </button>
            </div>

        )
    }
}

export default HallPicker;