import React, { FormEvent} from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../app/store/slices/common/Common.slice';
import { deleteTeacher } from '../app/store/slices/data/TeacherData.slice';
import Dynamic from '../utils/Dynamic';
import { RegInput } from './forms/schema';


// Code splitting
const TeacherForm = Dynamic(() => import('./forms/TeacherForm'),{fallback: <div>Loading...</div>});
const StudentForm = Dynamic(() => import('./forms/StudentForm'), {fallback: <div>Loading...</div>});
const ParentForm = Dynamic(() => import('./forms/ParentForm'), {fallback: <div>Loading...</div>});
const SubjectForm = Dynamic(() => import('./forms/SubjectForm'), {fallback: <div>Loading...</div>});
const ClassForm = Dynamic(() => import('./forms/ClassForm'), {fallback: <div>Loading...</div>});
const LessonForm = Dynamic(() => import('./forms/LessonForm'), {fallback: <div>Loading...</div>});
const ExamForm = Dynamic(() => import('./forms/ExamForm'), {fallback: <div>Loading...</div>});
const AssignmentForm = Dynamic(() => import('./forms/AssignmentForm'), {fallback: <div>Loading...</div>});
const ResultForm = Dynamic(() => import('./forms/ResultForm'), {fallback: <div>Loading...</div>});
const AttendanceForm = Dynamic(() => import('./forms/AttendanceForm'), {fallback: <div>Loading...</div>});
const EventForm = Dynamic(() => import('./forms/EventForm'), {fallback: <div>Loading...</div>});
const AnnouncementForm = Dynamic(() => import('./forms/AnnouncementForm'), {fallback: <div>Loading...</div>});



const forms: {
    [key: string] :(type: "create" | "update" , data?: object) => JSX.Element;
}={
    teacher: (type, data) => <TeacherForm table='teacher' type={type} data={data as RegInput}/>,
    student: (type, data) => <StudentForm table='student' type={type} data={data as RegInput}/>,
    parent: (type, data) => <ParentForm table='parent' type={type} data={data as RegInput}/>,
    subject: (type, data) => <SubjectForm table='subject' type={type} data={data as RegInput}/>,
    class: (type, data) => <ClassForm table='class' type={type} data={data as RegInput}/>,
    lesson: (type, data) => <LessonForm table='lesson' type={type} data={data as RegInput}/>,
    exam: (type, data) => <ExamForm table='exam' type={type} data={data as RegInput}/>,
    assignment: (type, data) => <AssignmentForm table='assignment' type={type} data={data as RegInput}/>,
    result: (type, data) => <ResultForm table='result' type={type} data={data as RegInput}/>,
    attendance: (type, data) => <AttendanceForm table='attendance' type={type} data={data as RegInput}/>,
    event: (type, data) => <EventForm table='event' type={type} data={data as RegInput}/>,
    announcement: (type, data) => <AnnouncementForm table='announcement' type={type} data={data as RegInput}/>,
}

export interface IFormModalProps {
    table: "teacher" | "student" | "parent" | "subject" | "class" | "exam" | "lesson" | "assignment"| "result"| "attendance" |"event" | "announcement";
    type: "create" | "update" | "delete";
    id?: number;
    title?: string;
    data?: object;
}

const FormModal: React.FC<IFormModalProps> = ({table, type, id, data, title}) => {

    const dispatch = useDispatch();
    const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
    const bgColor = type === "create" ? "bg-onaxYellow" : type === "update" ? "bg-onaxSky" : "bg-onaxPurple";
    const image = type === "create"? "plus" : type === "update" ? "edit" : "delete";
    const imgtitle = title ? title : '';

    const [open, setOpen] = React.useState(false);

    const HandleSubmit = (evt: FormEvent) => {
        evt.preventDefault();
        console.log('Deleting teacher with id: ', id);
        if(type === "delete" && id){
            if(table === "teacher"){   
                dispatch(setLoading({display: true, message: `Deleting ${table}...`}));
                //TODO: Remove time out and implement delete logic. Only used for similating API call
                setTimeout(() => {
                    dispatch(deleteTeacher(id!));
                    dispatch(setLoading({display: false, message: ''}));
                },1200);
            }else{
                alert('Currently, only teachers can be deleted');
                setOpen(false);
            }
        }
        if(type === "create"){
            if(table === "teacher" && data){
                console.log('Creating new record');
                
            }
        }
    }

    const HandleClick=(evt: React.MouseEvent<HTMLElement>)=>{
        setOpen(true);
        const dataVal = evt.currentTarget.getAttribute('data-val');
        if(dataVal){
            console.log(JSON.stringify(dataVal));
        }
    }

    const FormControl = ()=>{
        // #region Other possible options
        // if(table === "teacher"){
        //     switch(type){
        //         case "delete":
        //             return (id ?
        //                 (<form action='' onSubmit={HandleSubmit} className='p-4 flex flex-col gap-4'>
        //                     <span className='text-center font-medium'>Confirm {table} delete?</span>
        //                     <button className='font-semibold bg-red-500 rounded-md w-max px-4 py-2 text-onaxOffWhite border-none self-center'>Delete</button>
        //                 </form>):<></>
        //             );
        //         case "create":
        //             return <TeacherForm type='create' data={data as RegInput}/>;
        //         case "update":
        //             return <TeacherForm type='update' data={data as RegInput} id={id}/>;
        //     };
        // }
        // else if(table === "student"){
        //     switch(type){
        //         case "delete":
        //             return (id ?
        //                 (<form action='' onSubmit={HandleSubmit} className='p-4 flex flex-col gap-4'>
        //                     <span className='text-center font-medium'>Confirm {table} delete?</span>
        //                     <button className='font-semibold bg-red-500 rounded-md w-max px-4 py-2 text-onaxOffWhite border-none self-center'>Delete</button>
        //                 </form>):<></>
        //             );
        //         case "create":
        //             return <StudentForm type='create' data={data as RegInput}/>;
        //         case "update":
        //             return <StudentForm type='update' data={data as RegInput} id={id}/>;
        //     };
        // }
        // // else if(table === "parent"){

        // // }
        // else{
        //     return <></>
        // }
        // switch(type){
        //     case "delete":
        //         return (id ?
        //             (<form action='' onSubmit={HandleSubmit} className='p-4 flex flex-col gap-4'>
        //                 <span className='text-center font-medium'>Confirm {table} delete?</span>
        //                 <button className='font-semibold bg-red-500 rounded-md w-max px-4 py-2 text-onaxOffWhite border-none self-center'>Delete</button>
        //             </form>):<></>
        //         );
        //     case "create":
        //         return <TeacherForm type='create' data={data as RegInput}/>;
        //     case "update":
        //         return <TeacherForm type='update' data={data as RegInput} id={id}/>;
        // };
        //#endregion
        return type === "delete" && id ? (
            <form action='' onSubmit={HandleSubmit} className='p-4 flex flex-col gap-4'>
                <span className='text-center font-medium'>Confirm {table} delete?</span>
                <button className='font-semibold bg-red-500 rounded-md w-max px-4 py-2 text-onaxOffWhite border-none self-center'>Delete</button>
            </form>
        ): type === "create" || type === "update" ? (forms[table](type, data)) 
        : <div className='text-red-400'>Form not found!</div>;
    };

  return (
    <>
        <div className={`${size} flex items-center justify-center rounded-full ${bgColor} cursor-pointer`} data-val={data} onClick={HandleClick}>
            <img src={`/images/${image}.png`} alt="" title={`${imgtitle}`} width={16} height={16}/>
        </div>
        {open &&(
            <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[50%]">
                    {FormControl()}
                    <div className="absolute top-4 right-4 cursor-pointer" onClick={()=>setOpen(false)}>
                        <img src="/images/close.png" alt="Close" title="Close" width={14} height={14} />
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default FormModal;