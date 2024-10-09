import React, { useState } from "react";
import Calendar from "react-calendar";
import CalendarEventsData, { CalendarEventype } from "../app/data/CalendarEventsData";

const EventCalender: React.FC = () => {
  type ValuePiece = Date | null;
  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>(new Date());

  const [events, setEvents] = useState<CalendarEventype[]>([]);
  
  const allEvents = React.useMemo(() => {
        return CalendarEventsData;
  },[]);

  React.useEffect(() => {
    setEvents(allEvents);
  },[allEvents]);

  const HandleChange = (evt: Value) => {
    onChange((prev) => {
      console.log("previous date", prev);
      console.log("current date", evt);
      return evt;
    });
  };
  return (
    <div className="w-full bg-white p-4 rounded-xl">
      <Calendar
        onChange={HandleChange}
        value={value}
        className="w-[100%] border-none  border-0"
      />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <img src='/images/moreDark.png' alt="Events" width={20} height={20} className="cursor-pointer" />
      </div>
      <div className="flex flex-col gap-4">
        {events && events.map((event) => (
          <div key={event.id} className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-onaxSky even:border-t-onaxPurple">
            <div className="flex items-center justify-between">
                <h1 className="font-semibold text-gray-600">{event.title}</h1>
                <span className="text-xs text-gray-300">{event.datetime}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
