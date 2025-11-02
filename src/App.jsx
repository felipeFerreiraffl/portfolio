import Home from "./pages/Home";
import Maintenance from "./pages/Maintenance";
const underMaintenance = import.meta.env.VITE_UNDER_MAINTENANCE;

export default function App() {
  return underMaintenance ? <Maintenance /> : <Home />;
}
