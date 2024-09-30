import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../app/store/slices/common/Common.slice';
import { deleteTeacher } from '../app/store/slices/data/TeacherData.slice';

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
    }

    const HandleClick=(evt: React.MouseEvent<HTMLElement>)=>{
        setOpen(true);
        const dataVal = evt.currentTarget.getAttribute('data-val');
        if(dataVal){
            console.log(JSON.stringify(dataVal));
        }
    }

    const FormDelete = ()=>{
        return type === "delete" && id ? (
            <form action='' onSubmit={HandleSubmit} className='p-4 flex flex-col gap-4'>
                <span className='text-center font-medium'>Confirm {table} delete?</span>
                <button className='font-semibold bg-red-500 rounded-md w-max px-4 py-2 text-onaxOffWhite border-none self-center'>Delete</button>
            </form>
        ): <>Create/Update</>;
    };

  return (
    <>
        <div className={`${size} flex items-center justify-center rounded-full ${bgColor} cursor-pointer`} data-val={data} onClick={HandleClick}>
            <img src={`/images/${image}.png`} alt="" title={`${imgtitle}`} width={16} height={16}/>
        </div>
        {open &&(
            <div className="w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
                <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[50%]">
                    {FormDelete()}
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