import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "@/router";
import { Suspense } from "react";
import Transition from "@/components/Transition";

export const App: React.FC = () => {
  const Routers: React.FC = () => {
    const element = useRoutes(routes as any);
    return <Suspense fallback={<Transition />}>{element}</Suspense>;
  };

  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};

export default App;
