import "./App.css";
import ParentComponent from "./ParentComponent";

function App() {
  const color = "red";
  return (
    <>
      <ParentComponent color={color} />
    </>
  );
}

export default App;
