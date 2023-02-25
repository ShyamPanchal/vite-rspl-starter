import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import reactLogo from "./assets/react.svg";
import appStore from "./lib/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import OtherPage from "./pages/other";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Provider store={appStore.store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/other" element={<OtherPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
