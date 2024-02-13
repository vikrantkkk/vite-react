import "./App.css";
import Example from "./Example";
import Parent from "./Parent";
import ParentComponent from "./ParentComponent";

function App() {
  const color = "red";
  return (
    <>
      {/* <ParentComponent color={color} /> */}
      {/* <Example/> */}
      <Parent/>
    </>
  );
}

export default App;
