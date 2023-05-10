import React from "react";
import './home.css';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { displayGhost: true, isGhostVisibile: true };
    }

    render() {

        return (
            <div className="home">
                <h1 className="">Web Developer,</h1>
                <h1>Programmer Analyst</h1>
            </div>
        )
    }
}

export default Home;