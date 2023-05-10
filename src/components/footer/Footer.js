import React from "react";

class Footer extends React.Component {


    render() {
        var React = require('react');
        var { SocialIcon } = require('react-social-icons');

        const footerStyle = {
            fontFamily: "Arial",
            display: "flex",
            justifyContent: "space-between",
            width: "1100px",
            margin: "auto",
            position: "absolute",
            left: "0",
            bottom: "0",
            right: "0"
        }

        return <div className="footer-container" style={footerStyle}>
            <div id="footer-product-list">
                <h3>PRODUCT</h3>
                <p>Features</p>
                <p>Promo</p>
                <p>Download</p>
            </div>
            <div id="footer-contact-us">
                <h3>CONTACT</h3>
                <p>Find Us</p>
                <p>FAQ</p>
                <p>Help</p>
            </div>
            <div id="footer-social-media">
                <h3>FOLLOW ME</h3>
                <SocialIcon url="https://www.linkedin.com/in/sabrina-izzi/" network="linkedin" />
                <SocialIcon url="https://github.com/IzziSi" network="github" />
                <SocialIcon url="" network="twitter" />
            </div>
            <div id="">
                <h3>SUBSCRIBE</h3>
                {/*<input type="text" name="txtSubscribe"  placeholder="Enter e-mail address" onKeyPress={(ev) => {
                    if (ev.key === "Enter") {
                        ev.preventDefault();
                        console.log(ev.target.value);
                    }
                }} 
            />*/}
            </div>
        </div>
    }

}

export default Footer;