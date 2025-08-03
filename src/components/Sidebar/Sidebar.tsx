import AccountToggle from "./AccountToggle.tsx";
import Search from "./Search.tsx";
import { RouteSelect } from "./RouteSelect.tsx";
import { Plan } from "../Plan/Plan.tsx";

const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>
      {/*    Plan toggle*/}
      <Plan />
    </div>
  );
};

export default Sidebar;
