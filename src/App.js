import React from "react";
import SideBar from "./components/sideBar/SideBar.jsx";
import Topbar from "./components/tobBar/Topbar.jsx";
import "./App.css";
import Home from "./components/pages/home/home.jsx";
function App() {
    return (
        <div className="App">
            <Topbar />
            <div className="container">
                <SideBar />
                <Home />
            </div>
        </div>
    );
}

export default App;
