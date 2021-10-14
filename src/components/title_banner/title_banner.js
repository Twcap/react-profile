import React from 'react';
//import style 
import './title_banner.css';

class Title_banner extends React.Component{
    constructor(){
        super();
        this.state={
            title_banner: 'Tate Capra'
        }
    }
    render(){
        return(
            <div className='title_banner'>{this.state.title_banner}</div>
        );
    }
}

export default Title_banner;