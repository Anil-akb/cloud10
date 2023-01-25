import React from "react";
import Sec1 from "../components/AboutComp/Sec1";
import Sec2 from "../components/AboutComp/Sec2";
import Sec3 from "../components/AboutComp/Sec3";
import Sec4 from "../components/AboutComp/Sec4";
import Sec5 from "../components/AboutComp/Sec5";
import Sec6 from "../components/AboutComp/Sec6";

import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  return (
    <motion.div>
      <Sec1 />
      <Sec2 />
      {/* <Sec3 /> */}
      <Sec4 />
      <Sec5 />
      {/* <Sec6 /> */}
    </motion.div>
  );
};

export default About;
