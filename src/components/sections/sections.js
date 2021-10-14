import React from 'react';
import './sections.css';

class Sections extends React.Component{
    render(){
        return(
            <div className='sections'>
                <div>
                    <h2>About Me:</h2>
                    <p>This is a test about me</p>
                </div>
                <div>
                    <h3>Education</h3>
                    <p>Here is my Education</p>
                </div>
            </div>
        );
    }
}

export default Sections;