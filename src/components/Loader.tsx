import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store/RootReducer";

const Loader: React.FC = () => {
  const common = useSelector((state: RootState) => state.common);

  return (
    <div
      style={{ display:`${common.display ? 'block':'none'}`,zIndex:999 }}
      className="fixed inset-0 flex items-center justify-center bg-[#ececec] bg-opacity-50 z-100"
    >
      <div className="text-center text-onaxLavendarDark font-semibold">
        {common.message ? common.message : <span>Loading...</span>}
      </div>
    </div>
  );
};

export default Loader;

// {common.display ? { display: 'block' } : { display: "none" }}