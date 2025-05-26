import { AnimatePresence, motion } from "framer-motion";
import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingPage from "../ui/components/Loading";
import { useMinTime } from "../ui/hooks/useProgressValue";
const Home = lazy(() => import("../pages/home"));

export default function AppRoutes() {
  const location = useLocation();
  const { isMinTimePassed, progress } = useMinTime(2000);

  const loading = !isMinTimePassed;

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key={"loading"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <LoadingPage progress={progress} />
        </motion.div>
      ) : (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route element={<Home />} path="/" lazy={true} />
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
