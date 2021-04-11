import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } },
    exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const buttonVariants = {
    // each value in the array is a different keyframe
    hover: {
        // scale: [1, 1.1, 1, 1.1, 1, 1.1, 1],
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            // equivalent of 10 keyframes
            yoyo: Infinity,
            duration: 0.3,
        },
    },
};

const Home = () => {
    return (
        <motion.div
            className="home container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h2>Welcome to Pizza Barbar</h2>
            <Link to="/base">
                <motion.button variants={buttonVariants} whileHover="hover">
                    Shoo baddak 3laya?
                </motion.button>
            </Link>
        </motion.div>
    );
};

export default Home;
