import React from 'react'
import TableSearch from '../../../../components/TableSearch'
import Pagination from '../../../../components/Pagination'
import Table from '../../../../components/Table'
import { role } from '../../../data/lib/data'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../../store/slices/common/Common.slice'
import { RootState } from '../../../store/RootReducer'
import { ParentInfoType } from '../../../models/dto/ParentInfoType'
import FormModal from '../../../../components/FormModal'

const ParentListPage: React.FC = () => {

    const [parents, setParents] = React.useState<ParentInfoType[]>([]);
    const dispatch = useDispatch();
    const parentsData = useSelector((state: RootState) => state.parents);

    React.useEffect(() => {
        dispatch(setLoading({display: true, message: 'Loading Parents/Guardians...'}));
        setParents(parentsData);
        dispatch(setLoading({display: false, message: ''}));
    }, [dispatch, parentsData]);

    const columnHeaders =[
        {
            header: 'Info',
            accessor: 'info'
        },
        {
            header: 'Student Names',
            accessor: 'studentNames',
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

    const renderRow =(item: ParentInfoType): JSX.Element => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 hover:bg-onaxPurpleLight'>
                <td className='flex items-center gap-4 p-4 '>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>{item.name}</h3>
                        <p className='text-xs text-gray-500'>{item?.email}</p>
                    </div>
                </td>
                <td className='hidden md:table-cell'>{item.students.join(", ")}</td>
                <td className='hidden md:table-cell'>{item.phone}</td>
                <td className='hidden md:table-cell'>{item.address}</td>
                <td>
                    <div className="flex items-center gap-2">
                        {/* <Link to={`${AppRoutes().dashboard.parents.parent.parentRoute.replace(':id',`${item.id}`)}`}>
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-onaxSky">
                                <img src={`/images/edit.png`} alt={`Edit ${item.name}`} title={`Edit ${item.name}`} width={14} height={14}/>
                            </button>
                        </Link> */}
                        {
                            role === 'admin' &&(
                            <>
                                <FormModal id={item.id} table='parent' type='update' title={`Edit ${item.name}`} data={item}/>
                                <FormModal id={item.id} table='parent' type='delete' title={`Delete ${item.name}`} />
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
            <h1 className='hidden md:block text-lg font-semibold'>Parents/Guardians</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex gap-4 items-center self-end">
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/filter.png`} alt="filter" title='filter' width={14} height={14}/></button>
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/sort.png`} alt="sort" title='sort' width={14} height={14}/></button>
                    {role === 'admin' && (<FormModal table='parent' type='create' title={`Add new parent`} />)}
                </div>
            </div>
        </div>

        {/* LIST */}
        <Table data={parents.map((data) => renderRow(data))} column={columnHeaders} />
        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default ParentListPage;