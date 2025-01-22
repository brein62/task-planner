import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home'
import { ThemeProvider } from './components/theme-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<RecentActivity />} />
            <Route path="project/:id" element={<Project />} />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
