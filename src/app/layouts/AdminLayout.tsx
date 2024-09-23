import React from "react";
import { Link, Outlet } from "react-router-dom";
import MetaTag from "../../components/MetaTag";
import AppRoutes from "../../routes/AppRoutes";
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";

const AdminLayout: React.FC = () => {
  return (
    <>
      <MetaTag title="Dashboard Home" />
      <div className=" flex ">
        <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]">
          <Link
            to={AppRoutes().dashboard.home.parentRoute}
            className="flex items-center justify-center lg:justify-start gap-2 p-4"
          >
            <img src="/images/logo.png" alt="Logo" width={32} height={32} />
            <span className="hidden lg:block">SchoolTrack</span>
          </Link>
          <Menu />
        </div>
        <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-onaxOffWhite">
          <NavBar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
