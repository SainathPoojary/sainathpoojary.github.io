"use client";
import anim from "@/assets/anim";
import { AnimatePresence, motion } from "framer-motion";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";

enum Theme {
  Light = "light",
  Dark = "dark",
}

const ThemeChanger = () => {
  const [theme, setTheme] = useState<Theme>(Theme.Dark);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    lottieRef.current?.goToAndStop(10, true);
  }, []);

  const toggleTheme = () => {
    try {
      if (theme === Theme.Light) {
        lottieRef.current?.playSegments([90, 60], true);
        document.body.classList.add("dark");
        setTheme(Theme.Dark);
      } else {
        lottieRef.current?.playSegments([60, 100], true);
        document.body.classList.remove("dark");
        setTheme(Theme.Light);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative "
      >
        <Lottie
          lottieRef={lottieRef}
          onClick={toggleTheme}
          className="absolute top-0 right-0 w-24"
          animationData={anim.themeChange}
          loop={false}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeChanger;
