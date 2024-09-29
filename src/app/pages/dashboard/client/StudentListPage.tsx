import React, { FormEvent } from 'react'
import TableSearch from '../../../../components/TableSearch'
import Pagination from '../../../../components/Pagination'
import Table from '../../../../components/Table'
import { role } from '../../../data/lib/data'
import { Link } from 'react-router-dom'
import AppRoutes from '../../../../routes/AppRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../../store/slices/common/Common.slice'
import { RootState } from '../../../store/RootReducer'
import { deleteStudent } from '../../../store/slices/data/Studentdata.slice'
import { StudentsInfoType } from '../../../models/dto/StudentInfoType'

const StudentListPage: React.FC = () => {

    const [students, setStudents] = React.useState<StudentsInfoType[]>([]);
    const dispatch = useDispatch();
    const studentsData = useSelector((state: RootState) => state.students);

    React.useEffect(() => {
        dispatch(setLoading({display: true, message: 'Loading Students...'}));
        setStudents(studentsData);
        dispatch(setLoading({display: false, message: ''}));
    }, [dispatch, studentsData]);

    const columnHeaders =[
        {
            header: 'Info',
            accessor: 'info'
        },
        {
            header: 'Student ID',
            accessor: 'studentId',
            className: 'hidden md:table-cell'
        },
        {
            header: 'Grade',
            accessor: 'grade',
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
    const HandleDelete = (evt: FormEvent<HTMLElement>) => {
        evt.preventDefault();
        const data = evt.currentTarget.getAttribute('data-val')?.split('|');
        const doDelete = confirm(`Confirm delete?\n ${data?.[0]}`);
        if (doDelete) {
            dispatch(setLoading({display: true, message: `Deleting ${data?.[0]}...`}));
            //TODO: Remove time out and implement delete logic. Only used for similating API call
            setTimeout(() => {
                dispatch(deleteStudent(parseInt(data?.[1] as string)));
                dispatch(setLoading({display: false, message: ''}));
            },1200);
        }
    }

    const renderRow =(item: StudentsInfoType): JSX.Element => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 hover:bg-onaxPurpleLight'>
                <td className='flex items-center gap-4 p-4 '>
                    <img src={`${item.photo}`} alt="" width={40} height={40} className='w-10 h-10 rounded-full object-cover md:hidden xl:block'/>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>{item.name}</h3>
                        <p className='text-xs text-gray-500'>{item?.email}</p>
                    </div>
                </td>
                <td className='hidden md:table-cell'>{item.studentId}</td>
                <td className='hidden md:table-cell'>{item.grade}</td>
                {/* <td className='hidden md:table-cell'>{item.class}</td> */}
                <td className='hidden md:table-cell'>{item.phone}</td>
                <td className='hidden md:table-cell'>{item.address}</td>
                <td>
                    <div className="flex items-center gap-2">
                        <Link to={`${AppRoutes().dashboard.teacher.list.parentRoute}/${item.id}`}>
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-onaxSky">
                                <img src={`/images/view.png`} alt={`View ${item.name}`} title={`View ${item.name}`} width={14} height={14}/>
                            </button>
                        </Link>
                        {
                            role === 'admin' &&(
                            <Link to={`${AppRoutes().dashboard.teacher.list.parentRoute}/${item.id}`} onClick={HandleDelete} data-val={`${item.name}|${item.id}`}>
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-onaxPurple">
                                <img src={`/images/delete.png`} alt={`Delete ${item.name}`} title={`Delete ${item.name}`} width={14} height={14}/>
                            </button>
                        </Link>)
                        }
                    </div>
                </td>
            </tr>)
    }

 
  return (
    <div className='bg-white m-4 p-4 rounded-md flex-1 mt-0'>
        {/* TOP */}
        <div className="flex items-center justify-between">
            <h1 className='hidden md:block text-lg font-semibold'>All Students</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex gap-4 items-center self-end">
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/filter.png`} alt="filter" title='filter' width={14} height={14}/></button>
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/sort.png`} alt="sort" title='sort' width={14} height={14}/></button>
                    {role === 'admin' && (<button className='rounded-full bg-onaxYellow p-2'><img src={`/images/plus.png`} alt="add" title='add' width={14} height={14}/></button>)}
                </div>
            </div>
        </div>

        {/* LIST */}
        <Table data={students.map((data) => renderRow(data))} column={columnHeaders} />
        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default StudentListPage;