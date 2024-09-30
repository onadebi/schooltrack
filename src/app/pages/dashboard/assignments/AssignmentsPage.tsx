import React from 'react'
import TableSearch from '../../../../components/TableSearch'
import Pagination from '../../../../components/Pagination'
import Table from '../../../../components/Table'
import { role } from '../../../data/lib/data'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../../store/slices/common/Common.slice'
import { RootState } from '../../../store/RootReducer'
import { AssignmentsInfoType } from '../../../models/dto/AssignmentsInfoType'
import FormModal from '../../../../components/FormModal'

const AssignmentsPage: React.FC = () => {

    const [assignments, setAssignments] = React.useState<AssignmentsInfoType[]>([]);
    const dispatch = useDispatch();
    const assignmentsData = useSelector((state: RootState) => state.assignments);

    React.useEffect(() => {
        dispatch(setLoading({display: true, message: 'Loading assignments...'}));
        setAssignments(assignmentsData);
        dispatch(setLoading({display: false, message: ''}));
    }, [dispatch, assignmentsData]);

    const columnHeaders =[
        {
            header: 'Subject',
            accessor: 'subject',
        },
        {
            header: 'Class',
            accessor: 'className',
            className: 'hidden md:table-cell'
        },              
        {
            header: 'Teacher',
            accessor: 'teacher',
            className: 'hidden md:table-cell'
        },
        {
            header: 'Due Date',
            accessor: 'dueDate',
            className: 'hidden md:table-cell'
        },
        {
            header: 'Actions',
            accessor: 'actions',
        },
    ];
    const renderRow =(item: AssignmentsInfoType): JSX.Element => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 hover:bg-onaxPurpleLight'>
                <td className='flex items-center gap-4 p-4 '>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>{item.subject}</h3>
                    </div>
                </td>
                <td className='hidden md:table-cell'>{item.class}</td>
                <td className='hidden md:table-cell'>{item.teacher}</td>
                <td className='hidden md:table-cell'>{item.dueDate}</td>
                <td>
                    <div className="flex items-center gap-2">
                        {/* <Link to={`${AppRoutes().dashboard.assignments.parentRoute}/${item.id}`}>
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-onaxSky">
                                <img src={`/images/view.png`} alt={`View ${item.subject}`} title={`View ${item.subject}`} width={14} height={14}/>
                            </button>
                        </Link> */}
                        {
                        role === 'admin' &&(
                        <>
                            <FormModal table='assignment' type='update' title={`Update assignment ${item.subject}`} id={item.id} data={item} />
                            <FormModal table='assignment' id={item.id} type='delete' title={`Delete ${item.subject}`} />
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
            <h1 className='hidden md:block text-lg font-semibold'>Assignments</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex gap-4 items-center self-end">
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/filter.png`} alt="filter" title='filter' width={14} height={14}/></button>
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/sort.png`} alt="sort" title='sort' width={14} height={14}/></button>
                    {role === 'admin' && (
                        <FormModal table='assignment' type='create' title={`Add new assignment`} />
                        )}
                </div>
            </div>
        </div>

        {/* LIST */}
        <Table data={assignments.map((data) => renderRow(data))} column={columnHeaders} />
        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default AssignmentsPage;