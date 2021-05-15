import React from "react";
import Table from "./components/Table";
import Header from "./components/Header";

function App() {
  return (
    <div >
      <Header><h1>Employee Directory</h1></Header>
      <Header bg={"blue"} text_color={"white"}><h1>This bad boys</h1></Header>
      <Table/>
    </div>
  );
}

export default App;
