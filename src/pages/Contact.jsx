import React from "react";
import Sec1 from "../components/ContactComp/Sec1";
import Sec2 from "../components/ContactComp/Sec2";

import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.50 }}
      >
        <Sec1 />
        <Sec2 />
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
