import * as React from "react";
import type {MenuItem} from "../App.tsx";

interface SidenavProps{
    menus:MenuItem[];
}
const Sidenav:React.FC<SidenavProps> = ({menus}) => {
    return (
        <ul>
        {menus.map((menu,idx) => (
            <li key={idx}>{menu.name}</li>
            ))}
        </ul>
    );
}

export default Sidenav;