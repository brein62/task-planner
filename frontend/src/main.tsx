import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<RecentActivity />} />
            <Route path="project/:id" element={<Project />} />
          </Route> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </SidebarProvider>
  </StrictMode>
);
