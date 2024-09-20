import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppRoutes from '../routes/AppRoutes';

const NavBar: React.FC = () => {
    const [announcement, setAnnouncement] = React.useState<number>(1);
    const navigate = useNavigate();

    const HandleOnClick = () => {
        setAnnouncement(prev=>prev+1);
        navigate(AppRoutes().dashboard.admin.parentRoute);
    }
  return (
    <div className='flex items-center justify-between p-4'>
        {/* Search */}
        <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <img src='/images/search.png' alt='Search' width={14} height={14} />
            <input type='text' placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none' />
        </div>
        {/* Icons and User options */}
        <div className="flex items-center gap-6 justify-end w-full">
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                <img src='/images/message.png' alt='Message' width={20} height={20} />
            </div>
            <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                <img src='/images/announcement.png' alt='Announcement' width={20} height={20} />
                <div className="absolute bg-purple-500 -top-3 -right-3 w-5 h-5 flex items-center justify-center text-white rounded-full text-xs select-none" onClick={HandleOnClick}>
                    {announcement}
                </div>
            </div>
            <div className="flex flex-col">
                <span className='text-xs leading-3 font-medium'>Onadebi U</span>
                <span className='text-[10px] text-gray-500 text-right'>Admin</span>
            </div>
            <img src='/images/avatar.png' alt='Profile' width={36} height={36} className='rounded-full' />
        </div>
    </div>
  )
}

export default NavBar