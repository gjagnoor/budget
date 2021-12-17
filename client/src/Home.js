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
                <h2 className="App-heading">Budget $$$</h2>
                <p>
                    A simple application to manage my budget by month, year, and
                    beyond
                </p>
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
