import Home from "./pages/Home";
import Maintenance from "./pages/Maintainance";
const underMaintenance = import.meta.env.VITE_UNDER_MAINTENANCE;

export default function App() {
  return underMaintenance ? <Maintenance /> : <Home />;
}
