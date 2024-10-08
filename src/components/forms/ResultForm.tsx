import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInputField from '../FormInputField';
import { IPropsTableForm } from '../../app/models/generics/IPropsTableForm';
import { RegInput, schema } from './schema';

const ResultForm: React.FC<IPropsTableForm<RegInput>> = ({type, data}) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [photoName, setPhotoName] = React.useState<string | null>('Upload a photo');

const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm <RegInput>({
    resolver: zodResolver(schema),
    });

    const OnSubmit = handleSubmit((data) => {
        console.log(data);
    });
    const handleImageClick = () => {
      if (fileInputRef.current) {
      fileInputRef.current.click();
      }
    };

    const handleImageChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (evt.target.files && evt.target.files.length > 0) {
      setPhotoName(evt.target.files[0].name);
      }
    };
    
  return (
    <>
    <form className="flex flex-col gap-8" onSubmit={OnSubmit}>
        <h1 className='xt-xl font-semibold'>{type === 'create' ? `Add new`: 'Update'} result</h1>
        <span className='text-xs font-semibold'>Result Information</span>
        <div className="flex flex-wrap gap-8">
          <FormInputField label='Subject' type='text' register={register} name='subject' error={errors.subject} defaultValue={data?.subject} inputProps={{placeholder: 'Subject'}}/>

          <FormInputField label='Class' type='text' register={register} name='class' error={errors.class} defaultValue={data?.class} inputProps={{placeholder: 'Class'}}/>

          <FormInputField label='Teacher' type='text' register={register} name='teacher' error={errors.teacher} defaultValue={data?.teacher} inputProps={{placeholder: 'Teacher'}}/>
          
          <FormInputField label='Student' type='text' register={register} name='student' error={errors.student} defaultValue={data?.student} inputProps={{placeholder: 'Student'}}/>

          <div className='flex flex-col gap-2 md:w-1/4'>
              <label htmlFor={data?.type} className='text-xs text-gray-500'>Type</label>
              <select {...register("type")} defaultValue={data?.type} className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'>
                <option value="--">--Select--</option>
                <option value="exam">Exam</option>
                <option value="assignment">Assignment</option>
              </select>
              {errors?.type?.message && <p className='text-xs text-red-400 w-full'>{errors?.type?.message}</p>}
          </div>

          <FormInputField label='Score' type='number' register={register} name='score' error={errors.score} defaultValue={data?.score} />

          <FormInputField label='Date' type='date' register={register} name='date' error={errors.date} defaultValue={data?.date ? data.date.toString() : new Date(Date.now() + (24*60*60*1000)).toISOString().split('T')[0]} inputProps={{placeholder: 'date'}}/>
          
          <div className='flex flex-col gap-2 md:w-1/4 items-center justify-center'>
              <label className='flex gap-4 items-center align-middle justify-center cursor-pointer' onClick={handleImageClick}>
                <img src={`/images/upload.png`} alt='' width={24} height={24} className='text-xs text-gray-500' title='Upload image' />
                <span className='whitespace-nowrap'>{photoName}</span>
              </label>
              <input type='file' {...register("img")}  onChange={handleImageChange} className='hidden' ref={fileInputRef}/>
              {errors?.img?.message && (<p className='text-xs text-red-400 w-full text-center'>{errors?.img?.message}</p>)}
          </div>
        </div>
        <button className='border-none rounded-md  px-4 py-2 text-white bg-onaxLavendarDark font-semibold'>{type === 'create' ? "Create" : "Update"}</button>
    </form>
    </>
  )
}
export default ResultForm;
