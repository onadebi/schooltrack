import React from "react";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../app/data/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar: React.FC = () => {
  const [calView, setCalView] = React.useState<View>(Views.WORK_WEEK);
  const HandleViewChange = (selectedView: View) => {
    setCalView(selectedView);
  };
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '90%' }}
        views={["work_week", "day"]}
        view={calView}
        onView={HandleViewChange}
        min={new Date(2020, 0, 1, 6, 0)}
        max={new Date(2020, 0, 1, 23, 0)}
      />
    </div>
  );
};

export default BigCalendar;
