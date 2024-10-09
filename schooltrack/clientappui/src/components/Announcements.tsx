import React from 'react';

import { useAppStore } from '../app/services/appservices';
import { AnnountcementType } from '../app/services/announcements-service';

const Announcements:React.FC = () => {

const { announcementService } = useAppStore();
const [announcements, setAnnouncements] = React.useState<AnnountcementType[]>([]);
React.useEffect(() => {
    const fetchData = async () => {
        setAnnouncements(await announcementService.getAnnouncements());
    };
    fetchData();
}, [announcementService]);
  return (
    <div className='bg-white p-4 rounded-md'>
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className='text-xs text-gray-400 font-semibold cursor-pointer'>View all</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
            {announcements && announcements.map((announcement) => (
                <div key={announcement.id} className=" rounded-md p-4 odd:bg-onaxPurpleLight even: bg-onaxYellowLight">
                    <div className="flex items-center justify-between">
                        <h2 className="font-semibold ">{announcement.title}</h2>
                        <span className="text-xs bg-white font-medium text-gray-400 rounded-md py-1 px-1">{announcement.date}</span>
                    </div>
                    <p className="text-sm text-gray-400">{announcement.description}</p>
                </div>
            ))}
            {/* <div className="bg-onaxSky rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold ">School Resumption</h2>
                    <span className="text-xs bg-white font-medium text-gray-400 rounded-md py-1 px-1">2024-10-05</span>
                </div>
                <p className="text-sm text-gray-400">School will resume on the 10th of September, 2024.<br/>Other details would be communicated  sthe information are updated.</p>
            </div> */}
        </div>
    </div>
  )
}

export default Announcements;