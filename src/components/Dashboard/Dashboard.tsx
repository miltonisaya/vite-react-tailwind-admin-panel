import * as React from "react";
import { Topbar } from "../Topbar.tsx";
import { Grid } from "../Grid.tsx";

const sidebar: React.FC = () => {
  return (
    <div className="bg-white rounded-lg pb-4 shadow w-full">
      <Topbar />
      <Grid />
    </div>
  );
};

export default sidebar;
