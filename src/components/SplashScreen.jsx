import { motion } from "framer-motion";
import logo from '../../public/logo.png';

function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center flex-col gap-6"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3"
      >
        <img
          src={logo}
          alt="Nuvix Logo"
          className="w-20 h-20 object-contain"
        />
        <div className="leading-tight">
          <h1 className="text-white font-semibold text-3xl">
            NUVIX
          </h1>
          <p className="text-white/80 text-sm">
            SOLUTIONS & IT SERVICES
          </p>
        </div>
      </motion.div>

      {/* Loading Spinner */}
      <motion.div
        className="flex gap-2 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-yellow-400 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default SplashScreen;
