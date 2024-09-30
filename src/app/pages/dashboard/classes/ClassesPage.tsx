import React from 'react'
import TableSearch from '../../../../components/TableSearch'
import Pagination from '../../../../components/Pagination'
import Table from '../../../../components/Table'
import { role } from '../../../data/lib/data'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../../store/slices/common/Common.slice'
import { RootState } from '../../../store/RootReducer'
import { ClassesInfoType } from '../../../models/dto/ClassesInfoType'
import FormModal from '../../../../components/FormModal'

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
                        {
                            role === 'admin' &&(
                                <>
                                    <FormModal table='class' type='update' title={`Update class ${item.name}`} id={item.id} data={item} />
                                    <FormModal table='class' id={item.id} type='delete' title={`Delete ${item.name}`} />
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
            <h1 className='hidden md:block text-lg font-semibold'>Classes</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex gap-4 items-center self-end">
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/filter.png`} alt="filter" title='filter' width={14} height={14}/></button>
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/sort.png`} alt="sort" title='sort' width={14} height={14}/></button>
                    {role === 'admin' && (
                        <FormModal table='class' type='create' title={`Add new class`} />
                        )}
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