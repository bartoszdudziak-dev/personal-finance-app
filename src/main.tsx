import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import AppLayout from "./components/ui/AppLayout.tsx";
import Home from "./pages/Home.tsx";
import Transactions from "./pages/Transactions.tsx";
import Budgets from "./pages/Budgets.tsx";
import Pots from "./pages/Pots.tsx";
import RecurringBills from "./pages/RecurringBills.tsx";

import { BrowserRouter, Route, Routes } from "react-router";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CssBaseline />
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="pots" element={<Pots />} />
          <Route path="recurring" element={<RecurringBills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
