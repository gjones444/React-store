import React, {Component} from 'react';

const Footer = (props) =>{
    return(
        <footer>
            <p className="footer-links">
                <a href="https://github.com/gjones444/react-shopping-cart" target="_blank">View Source on Github</a>
                <span>  /  </span>
                <a href="mailto:gjonesrei@gmail.com" target="_blank">Need any help?</a>
            </p>
            <p>&copy; 2017 <strong>Veggy</strong> - Organic Green Store</p>
        </footer>
    )
};

export default Footer;
