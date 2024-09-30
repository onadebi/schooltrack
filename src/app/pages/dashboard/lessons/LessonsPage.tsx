import React from 'react'
import TableSearch from '../../../../components/TableSearch'
import Pagination from '../../../../components/Pagination'
import Table from '../../../../components/Table'
import { role } from '../../../data/lib/data'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../../store/slices/common/Common.slice'
import { RootState } from '../../../store/RootReducer'
import { LessonsInfoType } from '../../../models/dto/LessonsInfoType'
import FormModal from '../../../../components/FormModal'

const LessonsPage: React.FC = () => {

    const [lessons, setLessons] = React.useState<LessonsInfoType[]>([]);
    const dispatch = useDispatch();
    const lessonsData = useSelector((state: RootState) => state.lessons);

    React.useEffect(() => {
        dispatch(setLoading({display: true, message: 'Loading Lessons...'}));
        setLessons(lessonsData);
        dispatch(setLoading({display: false, message: ''}));
    }, [dispatch, lessonsData]);

    const columnHeaders =[
        {
          header: 'Subject',
          accessor: 'subject',
        },    
        {
            header: 'Class Name',
            accessor: 'className',
            className: 'hidden md:table-cell'
        },    
        {
            header: 'Teacher',
            accessor: 'teacher',
            className: 'hidden md:table-cell'
        },
        {
            header: 'Actions',
            accessor: 'actions',
        },
    ];

    const renderRow =(item: LessonsInfoType): JSX.Element => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 hover:bg-onaxPurpleLight'>
                <td className='flex items-center gap-4 p-4 '>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>{item.subject}</h3>
                    </div>
                </td>
                <td className='hidden md:table-cell'>{item.class}</td>
                <td className='hidden md:table-cell'>{item.teacher}</td>
                <td>
                    <div className="flex items-center gap-2">
                        {
                        role === 'admin' &&(
                            <>
                                <FormModal table='lesson' type='update' title={`Update lesson ${item.subject}`} id={item.id} data={item} />
                                <FormModal table='lesson' id={item.id} type='delete' title={`Delete ${item.subject}`} />
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
            <h1 className='hidden md:block text-lg font-semibold'>Lessons</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex gap-4 items-center self-end">
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/filter.png`} alt="filter" title='filter' width={14} height={14}/></button>
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/sort.png`} alt="sort" title='sort' width={14} height={14}/></button>
                    {role === 'admin' && (
                        <FormModal table='lesson' type='create' title={`Add new lesson`} />
                        )}
                </div>
            </div>
        </div>

        {/* LIST */}
        <Table data={lessons.map((data) => renderRow(data))} column={columnHeaders} />
        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default LessonsPage;