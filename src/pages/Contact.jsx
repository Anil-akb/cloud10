import React from "react";
import Sec1 from "../components/ContactComp/Sec1";
import Sec2 from "../components/ContactComp/Sec2";

import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  return (
    <AnimatePresence>
      <motion.div
       initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
      >
        <Sec1 />
        <Sec2 />
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
