
import './App.css'
import Sidebar from "../public/components/layout/Sidebar.tsx";
import Header from "../public/components/layout/Header.tsx";
import * as React from "react";

function App() {
    const [sideBarCollapsed, setSideBarCollapsed] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState("dashboard");

  return (
    <>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark-via-slate-800 dark:to-slate-900 transition-all duration-500">
            <div className="flex h-screen overflow-hidden">
                <Sidebar
                    collapsed = {sideBarCollapsed}
                    onToggle={()=> setSideBarCollapsed(!sideBarCollapsed)}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header sideBarCollapsed ={sideBarCollapsed}
                            onToggleSidebar={()=> setSideBarCollapsed(!sideBarCollapsed)}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default App
