import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = () => {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check if loader already shown
    const alreadyLoaded = sessionStorage.getItem("portfolio_loader_seen");

    if (alreadyLoaded) {
      setShow(false);
      return;
    }

    // First visit only
    setShow(true);

    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;

      setProgress(
        Math.min(
          Math.round((currentStep / steps) * 100),
          100
        )
      );

      if (currentStep >= steps) {
        clearInterval(timer);

        // Save session state
        sessionStorage.setItem(
          "portfolio_loader_seen",
          "true"
        );

        setTimeout(() => {
          setShow(false);
        }, 400);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0f12]"
        >
          <div className="flex w-full max-w-sm flex-col items-center px-6">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-5xl md:text-6xl font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
            >
              SHUBHAM
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 font-mono text-sm uppercase tracking-[0.3em] text-muted-foreground"
            >
              PRODUCT & AI LEADER
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 w-full"
            >
              <div className="mb-2 text-center font-mono text-sm font-medium text-purple-400">
                {progress}%
              </div>

              <div className="h-1 w-full overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400"
                  animate={{ width: `${progress}%` }}
                  transition={{
                    ease: "linear",
                    duration: 0.02,
                  }}
                />
              </div>

              <div className="mt-4 text-center font-mono text-[10px] text-white/40">
                Initializing Portfolio...
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};