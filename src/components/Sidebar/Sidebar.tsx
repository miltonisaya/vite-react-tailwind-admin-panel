import AccountToggle from "./AccountToggle.tsx";
import Search from "./Search.tsx";
import RouteSelect from "./RouteSelect.tsx";

const Sidebar = () => {
  return (
    <div>
      <div className="overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
        <RouteSelect />
      </div>
      {/*    Plan toggle*/}
    </div>
  );
};

export default Sidebar;
