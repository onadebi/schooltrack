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
import { ClassesInfoType } from '../../../models/dto/ClassesInfoType'
import { removeClass } from '../../../store/slices/data/ClassesData.slice'

const ClassesPage: React.FC = () => {

    const [classes, setClasses] = React.useState<ClassesInfoType[]>([]);
    const dispatch = useDispatch();
    const classesData = useSelector((state: RootState) => state.classes);

    React.useEffect(() => {
        dispatch(setLoading({display: true, message: 'Loading Classes...'}));
        setClasses(classesData);
        dispatch(setLoading({display: false, message: ''}));
    }, [dispatch, classesData]);

    const columnHeaders =[
        {
            header: 'Class Name',
            accessor: 'className',
        },
        {
            header: 'Capacity',
            accessor: 'capacity',
            className: 'hidden md:table-cell'
        },     
        {
            header: 'Grade',
            accessor: 'grade',
            className: 'hidden md:table-cell'
        },        
        {
            header: 'Supervisor',
            accessor: 'supervisor',
            className: 'hidden md:table-cell'
        },
        {
            header: 'Actions',
            accessor: 'actions',
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
                dispatch(removeClass(parseInt(data?.[1] as string)));
                dispatch(setLoading({display: false, message: ''}));
            },1200);
        }
    }

    const renderRow =(item: ClassesInfoType): JSX.Element => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 hover:bg-onaxPurpleLight'>
                <td className='flex items-center gap-4 p-4 '>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>{item.name}</h3>
                    </div>
                </td>
                <td className='hidden md:table-cell'>{item.capacity}</td>
                <td className='hidden md:table-cell'>{item.grade}</td>
                <td className='hidden md:table-cell'>{item.supervisor}</td>
                <td>
                    <div className="flex items-center gap-2">
                        <Link to={`${AppRoutes().dashboard.classes.parentRoute}/${item.id}`}>
                            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-onaxSky">
                                <img src={`/images/edit.png`} alt={`Edit ${item.name}`} title={`Edit ${item.name}`} width={14} height={14}/>
                            </button>
                        </Link>
                        {
                            role === 'admin' &&(
                            <Link to={`${AppRoutes().dashboard.classes.parentRoute}/${item.id}`} onClick={HandleDelete} data-val={`${item.name}|${item.id}`}>
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
            <h1 className='hidden md:block text-lg font-semibold'>Classes</h1>
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
        <Table data={classes.map((data) => renderRow(data))} column={columnHeaders} />
        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}


export default ClassesPage;