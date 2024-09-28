import React from "react";

export interface IProps {
  column: { header: string; accessor: string; className?: string }[];
  data: JSX.Element[];
}

const Table: React.FC<IProps> = ({ column, data }) => {
  return (
    <>
      <div>
        <table className="w-full mt-4">
          <thead>
            <tr className="w-full text-left text-gray-500 text-sm">
              {column.map((col) => (
                <th key={`${col.accessor}`} className={col.className}>{col.header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
