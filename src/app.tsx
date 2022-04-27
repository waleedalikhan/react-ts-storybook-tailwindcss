import React from "react";
import { Button } from "./components/button";
import { Input } from "./components/input";
import "./scss/tailwind.scss";

const App = () => {
  const clicked = () => {
    alert("Button Clicked");
  };
  const inputChanged = () => {
    alert("Input Changed");
  };
  return (
    <div className="h-screen p-12 m-12">
      <Button type="danger" label="My Button" onClick={clicked} />
      <Input type="text" inputLabel="title" inputWidth="50%" inputBorderColor="primary" inputLabelColor="primary" onInputChange={inputChanged}/>
    </div>
  );
};

export default App;
