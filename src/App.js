import logo from './logo.svg';
import './App.css';
import { CssBaseline } from "@material-ui/core";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { DashboardRoot } from './tools/dashboard/client';

function App() {
  return (
    <div>
          <>
            <CssBaseline />
            <BrowserRouter>
              <Routes>
                <Route path={"/uni-clone"} element={<DashboardRoot/>} />
                <Route path={"/"} element={<Navigate to={"/uni-clone"} />} />
              </Routes>
            </BrowserRouter>
          </>
        </div>
  );
}

export default App;
