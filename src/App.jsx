import "./App.css";
import { createContext, useContext, useEffect, useState } from "react";
import MyRoutes from "./routes/routes";
import Loading from "./pages/Loading";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
      <Router>
        <MyRoutes />
      </Router>
  );
}

export default App;
