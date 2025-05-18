import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "../pages/home";

export default function AppRoutes() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Routes>
          <Route element={<Home />} path="/" lazy={true} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
