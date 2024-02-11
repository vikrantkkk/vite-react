import "./App.css";
import Example from "./Example";
import ParentComponent from "./ParentComponent";

function App() {
  const color = "red";
  return (
    <>
      <ParentComponent color={color} />
      <Example/>
    </>
  );
}

export default App;
