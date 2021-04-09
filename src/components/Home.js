import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <motion.div
            animate={{ rotateZ: 180, opacity: 0.2, marginTop: 200 }}
            className="home container"
        >
            <motion.h2 animate={{ color: "#ff2994", x: 100, y: -100 }}>
                Welcome to Pizza Barbar
            </motion.h2>
            <Link to="/base">
                <motion.button animate={{ scale: 1.5 }}>
                    Shoo baddak 3laya?
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Home;
