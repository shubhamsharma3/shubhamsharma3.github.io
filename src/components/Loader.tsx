import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1400);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="font-display text-5xl md:text-7xl font-bold text-gradient-primary"
            >
              SS
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              className="mt-4 h-[2px] bg-gradient-primary"
            />
            <p className="mt-3 text-center font-mono text-xs text-muted-foreground">loading experience</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
