import React from 'react';
import './projects.css';

class Project extends React.Component{
    constructor(){
        super();
        this.state={
            project: 'Project Link'
        }
    }
    render(){
        return(
            <div className='project'>
                    <div>Project 1</div>
                    <div>Project 2</div>
                    <div>Project 3</div>
            </div>
        );
    }
}

export default Project;