import React from 'react'
import TableSearch from '../../../../components/TableSearch'
import Pagination from '../../../../components/Pagination'
import Table from '../../../../components/Table'
import { role } from '../../../data/lib/data'
import { TeacherInfoType } from '../../../models/dto/TeacherInfoType'
import { Link } from 'react-router-dom'
import AppRoutes from '../../../../routes/AppRoutes'
import { useDispatch, useSelector } from 'react-redux'
// import { RootState } from '../../../store/RootReducer'
import FormModal from '../../../../components/FormModal'
import { fetchAllTeachers } from '../../../store/slices/data/TeacherData.slice'
import { AppDispatch, RootState } from '../../../store/storeKeeper'

const TeacherList: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const teachersData = useSelector((state: RootState) => state.teachers);

    React.useEffect(() => {
        dispatch(fetchAllTeachers());
    }, [dispatch]);

    const columnHeaders =[
        {
            header: 'Info',
            accessor: 'info'
        },
        {
            header: 'Teacher ID',
            accessor: 'teacherId',
            className: 'hidden md:table-cell'
        },
        {
            header: 'Subjects',
            accessor: 'subjects',
            className: 'hidden md:table-cell'
        },
        {
            header: 'Classes',
            accessor: 'classes',
            className: 'hidden md:table-cell'
        },
        {
            header: 'Phone',
            accessor: 'phone',
            className: 'hidden md:table-cell'
        },
        {
            header: 'Address',
            accessor: 'address',
            className: 'hidden md:table-cell'
        },
        {
            header: 'Actions',
            accessor: 'actions',
            className: 'hidden md:table-cell'
        },
    ];

    const renderRow =(item: TeacherInfoType): JSX.Element => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 hover:bg-onaxPurpleLight'>
                <td className='flex items-center gap-4 p-4 '>
                    <img src={`${item.photo}`} alt="" width={40} height={40} className='w-10 h-10 rounded-full object-cover md:hidden xl:block'/>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>{item.name}</h3>
                        <p className='text-xs text-gray-500'>{item?.email}</p>
                    </div>
                </td>
                <td className='hidden md:table-cell'>{item.teacherId}</td>
                <td className='hidden md:table-cell'>{item.subjects.join(', ')}</td>
                <td className='hidden md:table-cell'>{item.classes.join(', ')}</td>
                <td className='hidden md:table-cell'>{item.phone}</td>
                <td className='hidden md:table-cell'>{item.address}</td>
                <td>
                    <div className="flex items-center gap-2">
                        <Link to={`${AppRoutes().dashboard.teachers.teacher.parentRoute.replace(':id',`${item.id}`)}`}>
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-onaxSky">
                                <img src={`/images/view.png`} alt={`View ${item.name}`} title={`View ${item.name}`} width={14} height={14}/>
                            </button>
                        </Link>
                        {
                            role === 'admin' &&(<FormModal id={item.id} table='teacher' type='delete' title={`Delete ${item.name}`} />)
                        }
                    </div>
                </td>
            </tr>)
    }

 
  return (
    <div className='bg-white m-4 p-4 rounded-md flex-1 mt-0'>
        {/* TOP */}
        <div className="flex items-center justify-between">
            <h1 className='hidden md:block text-lg font-semibold'>All Teachers</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex gap-4 items-center self-end">
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/filter.png`} alt="filter" title='filter' width={14} height={14}/></button>
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/sort.png`} alt="sort" title='sort' width={14} height={14}/></button>
                    {role === 'admin' && (<FormModal table='teacher' type='create' title='Add new teacher'/>)}
                </div>
            </div>
        </div>

        {/* LIST */}
        <Table data={teachersData.map((data) => renderRow(data))} column={columnHeaders} />
        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default TeacherList