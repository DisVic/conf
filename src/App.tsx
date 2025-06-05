import { useRoutes } from "react-router-dom";
import { appRoutesDefinition } from "./views/routes/app.routes";

function App() {
  const AppRoutes = useRoutes(appRoutesDefinition);
  return AppRoutes;
}

export default App;
