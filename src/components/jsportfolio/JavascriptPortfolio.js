import React from "react";
import { Link } from "react-router-dom";

class JavascriptPortfolio extends React.Component {

    constructor(props) {
        super(props);
        this.state = { displayGhost: true, isGhostVisibile: true };
    }

    render() {

        return (
            <div className="js-portfolio-home">
                <div className="mischief-managed-div">
                    <h1>Rachel's Mischief Managed Salon</h1>
                    <Link to="/javascript/rachel" >Check it out</Link>
                </div>
                <div className="llama-div">
                    <h1>The Dramatic Llama's blog</h1>
                    <Link to="/javascript/llama" >Check it out</Link>
                </div>
            </div>
        )
    }
}   

export default JavascriptPortfolio;