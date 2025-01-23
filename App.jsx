import React from "react";

function App() {
  // State (optional)
  const [count, setCount] = React.useState(0);

  // Event handler
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1

