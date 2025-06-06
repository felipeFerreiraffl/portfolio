import { AnimatePresence, motion } from "framer-motion";
import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingPage from "../ui/components/Loading";
import { useMinTime } from "../ui/hooks/useProgressValue";
const Home = lazy(() => import("../pages/home"));
const Portfolio = lazy(() => import("../pages/portfolio"));
const Hobbies = lazy(() => import("../pages/hobbies"));
const AnimesMangas = lazy(() => import("../pages/hobbies/animes-mangas"));
const AnimeMangaContent = lazy(() => import("../pages/content/animes-mangas"));
const Games = lazy(() => import("../pages/hobbies/games"));
const Football = lazy(() => import("../pages/hobbies/football"));
const Drawings = lazy(() => import("../pages/hobbies/drawings"));

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
            <Route element={<Portfolio />} path="/portfolio" lazy={true} />
            <Route element={<Hobbies />} path="/hobbies" lazy={true} />
            <Route
              element={<AnimesMangas />}
              path="/hobbies/animes-mangas"
              lazy={true}
            />
            <Route
              element={<AnimeMangaContent />}
              path="/hobbies/animes-mangas/:type/:id"
              lazy={true}
            />
            <Route element={<Games />} path="/hobbies/games" lazy={true} />
            <Route
              element={<Football />}
              path="/hobbies/football"
              lazy={true}
            />
            <Route
              element={<Drawings />}
              path="/hobbies/drawings"
              lazy={true}
            />
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
