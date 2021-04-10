import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <motion.div
            className="home container"
            // default type: tween
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
        >
            <h2>Welcome to Pizza Barbar</h2>
            <Link to="/base">
                <motion.button
                    whileHover={{
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgb(255,255,255)",
                        boxShadow: "0px 0px 8px rgb(255,255,255)",
                    }}
                >
                    Shoo baddak 3laya?
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Home;
