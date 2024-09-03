import "./App.css";
import Card1 from "./components/Card1";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "./components/Container";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Container>
      <div style={{ display: "flex", gap: "48px", marginTop: "48px" }}>
        <Sidebar />
        <Main />
      </div>
    </Container>
  );
}

export default App;
