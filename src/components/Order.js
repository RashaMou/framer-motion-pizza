import { motion } from "framer-motion";
import React from "react";

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
            // mass and damping are properties specific to spring
            mass: 0.4,
            damping: 8,
            // when this should occur in relation to any children elements that are animating as well
            when: "beforeChildren",
            staggerChildren: 0.4,
        },
    },
};

const childVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

const Order = ({ pizza }) => {
    return (
        <motion.div
            className="container order"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h2>Thank you for your order :)</h2>

            <motion.p variants={childVariants}>
                You ordered a {pizza.base} pizza with:
            </motion.p>
            <motion.div variants={childVariants}>
                {pizza.toppings.map((topping) => (
                    <div key={topping}>{topping}</div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Order;
