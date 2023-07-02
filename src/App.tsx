import type { FC } from "react";

import { CRORateContextProvider } from "./contexts/CRORateContext";
import CalculatorPage from "./pages/CalculatorPage";

const App: FC = () => (
  <CRORateContextProvider>
    <CalculatorPage />
  </CRORateContextProvider>
);

export default App;
