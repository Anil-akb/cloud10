import React from "react";
// import New_map from '../components/ContactComp/New_map'
import Sec1 from "../components/ContactComp/Sec1";
import Sec2 from "../components/ContactComp/Sec2";
import Sec3 from "../components/ContactComp/Sec3";

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
        {/* <Sec3/> */}
        {/* <New_map/> */}
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
