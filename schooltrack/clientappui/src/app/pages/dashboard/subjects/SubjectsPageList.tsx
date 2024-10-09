import React from 'react'
import TableSearch from '../../../../components/TableSearch'
import Pagination from '../../../../components/Pagination'
import Table from '../../../../components/Table'
import { role } from '../../../data/lib/data'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../../store/slices/common/Common.slice'
import { SubjectInfoType } from '../../../models/dto/SubjectInfoType'
import FormModal from '../../../../components/FormModal'
import { AppDispatch, RootState } from '../../../store/storeKeeper'
import { fetchAllSubjects } from '../../../store/slices/data/SubjectData.slice'

const SubjectsPageList: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const subjectsData = useSelector((state: RootState) => state.subjects);

    React.useEffect(() => {
        dispatch(setLoading({display: true, message: 'Loading Subjects...'}));
        dispatch(fetchAllSubjects());
        dispatch(setLoading({display: false, message: ''}));
    }, [dispatch, subjectsData]);

    const columnHeaders =[
        {
            header: 'Subject Name',
            accessor: 'subject',
            className: ''
        },        
        {
            header: 'Teachers',
            accessor: 'teachers',
            className: 'hidden md:table-cell'
        },
        {
            header: 'Actions',
            accessor: 'actions',
            className: ''
        },
    ];

    const renderRow =(item: SubjectInfoType): JSX.Element => {
        return (
            <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 hover:bg-onaxPurpleLight'>
                <td className='flex items-center gap-4 p-4 '>
                    <div className='flex flex-col'>
                        <h3 className='font-semibold'>{item.name}</h3>
                    </div>
                </td>
                <td className='hidden md:table-cell'>{item.teachers.join(", ")}</td>
                <td>
                    <div className="flex items-center gap-2">
                        {
                        role === 'admin' &&
                            (
                                <>
                                    <FormModal table='subject' type='update' title={`Update subject ${item.name}`} id={item.id} data={item} />
                                    <FormModal table='subject' id={item.id} type='delete' title={`Delete ${item.name}`} />
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
            <h1 className='hidden md:block text-lg font-semibold'>Subjects</h1>
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <TableSearch />
                <div className="flex gap-4 items-center self-end">
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/filter.png`} alt="filter" title='filter' width={14} height={14}/></button>
                    <button className='rounded-full bg-onaxYellow p-2'><img src={`/images/sort.png`} alt="sort" title='sort' width={14} height={14}/></button>
                    {role === 'admin' && (<FormModal table='subject' type='create' title={`Add new subject`} />)}
                </div>
            </div>
        </div>

        {/* LIST */}
        <Table data={subjectsData.map((data) => renderRow(data))} column={columnHeaders} />
        {/* PAGINATION */}
        <Pagination />
    </div>
  )
}

export default SubjectsPageList;