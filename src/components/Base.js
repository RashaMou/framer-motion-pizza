import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Base = ({ addBase, pizza }) => {
    const bases = ["Classic", "Thin & Crispy", "Smeekeh"];

    return (
        <motion.div
            initial={{ x: "100vw" }}
            animation={{ x: 0 }}
            transition={{ type: "spring", delay: 0.5 }}
            className="base container"
        >
            <h3>Step 1: Choose Your 3ajeeneh</h3>
            <ul>
                {bases.map((base) => {
                    let spanClass = pizza.base === base ? "active" : "";
                    return (
                        <li key={base} onClick={() => addBase(base)}>
                            <span className={spanClass}>{base}</span>
                        </li>
                    );
                })}
            </ul>

            {pizza.base && (
                <motion.div
                    className="next"
                    initial={{ x: "-100vh" }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 120 }}
                >
                    <Link to="/toppings">
                        <button>Next</button>
                    </Link>
                </motion.div>
            )}
        </motion.div>
    );
};

export default Base;
