import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
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
                ></motion.div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
