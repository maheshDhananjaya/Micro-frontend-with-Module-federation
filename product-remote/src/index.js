import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
    <div style={{ padding: "20px", border: "2px dashed blue" }}>
        <h1>Product Remote Running</h1>
        <p>This is the remote app root</p>
    </div>
);

const container = document.getElementById("root");

if (!container) {
    console.error("Remote root container missing");
}

const root = ReactDOM.createRoot(container);
root.render(<App />);
