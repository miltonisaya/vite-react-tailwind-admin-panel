import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import Dashboard from "./components/Dashboard/Dashboard.tsx";

function App() {
  return (
    <>
      <main className="grid gap-4 p-4 grid-cols-[220px,1fr]">
        <Sidebar />
        <Dashboard />
      </main>
    </>
  );
}

export default App;
