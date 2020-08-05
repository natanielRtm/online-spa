import React, {Component} from 'react';
import About from './About.js';
import Experience from './experience.js';
import Education from './education.js';
import Skills from './Skills.js';
import Intereset from './Interests.js'
import Awards from './Awards';

import {Link} from 'react-router-dom'


class Home extends Component{
    render(){
        return(
            <div>
                <About/>
                <Experience/>
                <Education/>
                <Skills/>
                <Intereset/>
                <Awards/>
            </div>
        )
    }

}

export default Home;