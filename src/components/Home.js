import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home container">
            <h2>Welcome to Pizza Barbar</h2>
            <Link to="/base">
                <button>Shoo baddak 3laya?</button>
            </Link>
        </div>
    );
};

export default Home;
