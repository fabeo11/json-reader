import React, { Component } from 'react';
import "./styles.css";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
        <div className="container">
            <h2>Desenvolvido por: Fabio Ishizu.</h2>
            <ul>
                <li><a href="/"><FaLinkedin color="#dbd3ff"/></a></li>
                <li><a href="/"><FaGithub color="#dbd3ff"/></a></li>  
            </ul>
        </div>
        );
    }
}
 
export default Footer;