import AppProvider from "./AppProvider";
import Form from "./Form";

function App() {
  return <div className="App">
    <AppProvider>
      <Form/>
    </AppProvider>
  </div>;
}

export default App;
