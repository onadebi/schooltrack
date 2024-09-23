import React from "react";
import UserCardInfo from "../../../../components/UserCardInfo";
import CountPieChart from "../../../../components/CountPieChart";
import ClientChartStats from "../../../models/dto/ClientChartStats";
import UserTypeEnum from "../../../models/dto/UserTypeEnum";
import AttendanceChart from "../../../../components/AttendanceChart";
import FinanceChart from "../../../../components/FinanceChart";
import EventCalender from "../../../../components/EventCalender";
import Announcements from "../../../../components/Announcements";

const AdminPage: React.FC = () => {
  const [dataStats, setDataStats] = React.useState<ClientChartStats[]>([]);

  const [userRecords] = React.useState<{name: UserTypeEnum, value: number}[]>([
    {name: UserTypeEnum.Students, value: 6123},
    {name: UserTypeEnum.Supervisor, value: 1123},
    {name: UserTypeEnum.Parent, value: 1123},
    {name: UserTypeEnum.Staff, value: 1123},
  ]);

  React.useEffect(() => {
    const apiVals: ClientChartStats[] = [];
    for(let i = 0; i < 1; i++){
      apiVals.push({value: Math.floor(Math.random() * 1000), name: "Boys" });
      apiVals.push({value: 1000 - apiVals[0].value, name: "Girls" });
    };
    setDataStats(apiVals);
  },[]);

  return (
    <>
      <div className="flex p-4 gap-4 flex-col md:flex-row">
        {/* LEFT SIDE SECTION */}
        <section className="w-full lg:w-2/3 flex flex-col gap-8">
          <div className="flex flex-row gap-4 justify-between flex-wrap">
            {userRecords && userRecords.map((record, index) => (
              <UserCardInfo key={index} type={record.name} count={record.value} />
            ))}
          </div>
          {/* Middle Chart */}
          <div className="flex flex-col lg:flex-row gap-4">
            {/* COUNT-CHART */}
            <div className="w-full lg:w-1/3 h-min-[350px]">             
              <CountPieChart dataStats={dataStats}/>
            </div>
            {/* ATTENDANCE CHART */}
            <div className="w-full lg:w-2/3 h-min-[350px]" style={{zIndex:999}}>
              <AttendanceChart />
            </div>
          </div>
          {/* BOTTOM CHART */}
          <div className="w-full ">
            <FinanceChart/>
          </div>
        </section>
        {/* RIGHT SIDE SECTION */}
        <section className="w-full lg:w-1/3 flex flex-col gap-8">
            <EventCalender/>
            <Announcements/>
        </section>
      </div>
    </>
  );
};

export default AdminPage;
