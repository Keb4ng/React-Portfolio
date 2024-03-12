import { useInView, motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.75 }}>
        {children}
      </motion.div>
    </div>
  );
};
