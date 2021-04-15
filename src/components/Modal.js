import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariants = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "200px",
        opacity: 1,
        // so that it starts after backdrop
        transition: { delay: 0.5 },
    },
};

const Modal = ({ showModal, setShowModal }) => {
    return (
        <AnimatePresence exitBeforeEnter>
            {showModal && (
                // div here fades out content behind modal
                <motion.div
                    className="backdrop"
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="modal"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <p>Want to make another pizza?</p>
                        <Link to="/">
                            <button>Start over</button>
                        </Link>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
