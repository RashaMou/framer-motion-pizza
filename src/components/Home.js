import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="home container"
        >
            <h2>Welcome to Pizza Barbar</h2>
            <Link to="/base">
                <motion.button animate={{}}>Shoo baddak 3laya?</motion.button>
            </Link>
        </motion.div>
    );
};

export default Home;
