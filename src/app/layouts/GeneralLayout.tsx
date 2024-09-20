import React from "react";
import { Outlet } from "react-router-dom";
import MetaTag from "../../components/MetaTag";

const GeneralLayout: React.FC = () => {
  return (
    <>
    <MetaTag title="ONX School Management System" description="Onaxsys School Management System" />
      <div>
          <Outlet />
      </div>
    </>
  );
};

export default GeneralLayout;
