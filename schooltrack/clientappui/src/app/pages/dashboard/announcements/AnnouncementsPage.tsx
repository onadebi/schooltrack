import React from 'react'
import TableSearch from '../../../../components/TableSearch'
import Pagination from '../../../../components/Pagination'
import Table from '../../../../components/Table'
import { role } from '../../../data/lib/data'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../../store/slices/common/Common.slice'
import { AnnouncementsInfoType } from '../../../models/dto'
import FormModal from '../../../../components/FormModal'
import { AppDispatch, RootState } from '../../../store/storeKeeper'
import { fetchAllAnnouncements } from '../../../store/slices/data/AnnouncementData.slice'

const AnnouncementsPage: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const announcementsData = useSelector((state: RootState) => state.announcements);

    React.useEffect(() => {
        dispatch(setLoading({display: true, message: 'Loading announcements...'}));
        dispatch(fetchAllAnnouncements());
        dispatch(setLoading({display: false, message: ''}));
    }, [dispatch, announcementsData]);

    const columnHeaders =[
        {
            header: 'Title',
            accessor: 'title',
        },
        {
            header: 'Class',
            accessor: 'className',
        },              
        {
            header: 'Date',
            accessor: 'date',
            className: 'hidden md:table-cell'
        },
        {
            header: 'Actions',
            accessor: 'actions',
        },
    ];

    const renderRow =(item: AnnouncementsInfoType): JSX.Element => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 hover:bg-onaxPurpleLight'>
                <td className='flex items-center gap-4 p-4 '>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>{item.title}</h3>
                    </div>
                </td>
                <td className='md:table-cell'>{item.class}</td>
                <td className='hidden md:table-cell'>{item.date}</td>
                <td>
                    <div className="flex items-center gap-2">
                        {/* <Link to={`${AppRoutes().dashboard.announcements.parentRoute}/${item.id}`}>
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-onaxSky">
                                <img src={`/images/view.png`} alt={`View ${item.title}`} title={`View ${item.title}`} width={14} height={14}/>
                            </button>
                        </Link> */}
                        {
                        role === 'admin' &&(
                        <>
                            <FormModal table='announcement' type='update' title={`Update announcement ${item.title}`} id={item.id} data={item} />
                            <FormModal table='announcement' id={item.id} type='delete' title={`Delete ${item.title}`} />
                        </>
                        )
                        }
                    </div>
                </td>
            </tr>)
    }

 
  return (
    <div className='bg-white m-4 p-4 rounded-md flex-1 mt-0'>
        {/* TOP */}
        <div className="flex items-center justify-between">
            <h1 className='hidden md:block text-lg font-semibold'>All Announcements</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex gap-4 items-center self-end">
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/filter.png`} alt="filter" title='filter' width={14} height={14}/></button>
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/sort.png`} alt="sort" title='sort' width={14} height={14}/></button>
                    {role === 'admin' && (<FormModal table='announcement' type='create' title={`Add new announcement`} />)}
                </div>
            </div>
        </div>

        {/* LIST */}
        <Table data={announcementsData.map((data) => renderRow(data))} column={columnHeaders} />
        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default AnnouncementsPage;