import React from 'react'
import Announcements from '../../../../components/Announcements';
import BigCalendar from '../../../../components/BigCalendar';
import { useParams } from 'react-router-dom';

const ParentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  return (
    <div className="flex p-4 gap-4 flex-col xl:flex-row">
      {/* LEFT SIDE */}
      <section className="w-full xl:w-2/3 flex flex-col gap-8">
        <div className="h-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Schedule (Ejiro -ParentId: {id})</h1>
          <BigCalendar/>
        </div>
      </section>
      {/* RIGHT SIDE */}
      <section className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </section>
    </div>
  );
}

export default ParentPage