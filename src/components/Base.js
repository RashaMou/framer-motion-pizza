import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

// parent elements that have variants propagate their variants to motion enabled children elements. It's not inheriting the properties, just the string values of initial (hidden) and animate (visible)

const containerVariants = {
    hidden: {
        opacity: 0,
        x: "100vw",
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            delay: 0.5,
        },
    },
    exit: { x: "-100vw", transition: { ease: "easeInOut" } },
};

const nextVariants = {
    hidden: {
        x: "-100vw",
    },
    visible: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 120,
        },
    },
};

const buttonVariants = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            yoyo: Infinity,
            duration: 0.3,
        },
    },
};

const Base = ({ addBase, pizza }) => {
    const bases = ["Classic", "Thin & Crispy", "Smeekeh"];

    return (
        <motion.div
            className="base container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h3>Step 1: Choose Your 3ajeeneh</h3>
            <ul>
                {bases.map((base) => {
                    let spanClass = pizza.base === base ? "active" : "";
                    return (
                        <motion.li
                            key={base}
                            onClick={() => addBase(base)}
                            whileHover={{
                                scale: 1.3,
                                color: "#f8e112",
                                originX: 0,
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <span className={spanClass}>{base}</span>
                        </motion.li>
                    );
                })}
            </ul>

            {pizza.base && (
                <motion.div className="next" variants={nextVariants}>
                    <Link to="/toppings">
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                        >
                            Next
                        </motion.button>
                    </Link>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Base;
