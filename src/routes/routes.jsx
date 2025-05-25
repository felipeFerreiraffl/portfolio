import { AnimatePresence, motion } from "framer-motion";
import { lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loading from "../ui/components/Loading";
const Home = lazy(() => import("../pages/home"));

export default function AppRoutes() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key={"loading-screen"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Loading />
        </motion.div>
      ) : (
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route element={<Home />} path="/" lazy={true} />
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
