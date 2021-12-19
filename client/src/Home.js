import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Navigation from "./features/navigation/Navigation";

function Home() {
    return (
        <div className="App">
            <Navigation />
            <header className="App-header">
                <h2 className="App-heading">The Fortune Teller $$$</h2>
                <p>An application that helps me change my fortune</p>
            </header>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
