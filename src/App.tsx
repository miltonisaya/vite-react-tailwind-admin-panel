import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Dashboard from "./components/Dashboard/Dashboard.tsx";

function App() {
  return (
    <>
      <main className="flex gap-4 p-4">
        <Sidebar />
        <Dashboard />
      </main>
    </>
  );
}

export default App;
