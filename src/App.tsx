import './App.css'
import Header from "./components/header.tsx";
import Sidenav from "./components/sidenav.tsx";
import Footer from "./components/footer.tsx";

export interface MenuItem {
    name:string;
    icon:string;
    url:string;
}

const menus:MenuItem[] = [
    {
        name:"Dashboard",
        icon:"settings",
        url:"/dashboard"
    },
    {
        name:"Security",
        icon:"security",
        url:"security"
    }
]

function App() {
  return (
    <>
        <Header title="Admin Dashboard" />
        <Sidenav menus={menus}/>
        <Footer footerText="All Rights Reserved" />
    </>
  )
}

export default App
