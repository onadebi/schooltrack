import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInputField from '../FormInputField';
import { IPropsTableForm } from '../../app/models/generics/IPropsTableForm';
import { RegInput, schema } from './schema';


const ClassForm: React.FC<IPropsTableForm<RegInput>> = ({type, data}) => {
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
        <h1 className='xt-xl font-semibold'>{type === 'create' ? `Register new`: 'Update'} class</h1>
        <span className='text-xs font-semibold'>Class Information</span>
        <div className="flex flex-wrap gap-8">
          <FormInputField label='Class name' type='text' register={register} name='name' error={errors.name} defaultValue={data?.name} inputProps={{placeholder: 'Class name'}}/>

          <FormInputField label='Capacity' type='number' register={register} name='capacity' error={errors.capacity} defaultValue={data?.capacity?.toString()} inputProps={{placeholder: 'Capacity'}}/>

          <FormInputField label='Grade' type='number' register={register} name='grade' error={errors.grade} defaultValue={data?.grade?.toString()} inputProps={{placeholder: 'Grade'}}/>
          
          <FormInputField label='Supervisor' type='text' register={register} name='supervisor' error={errors.supervisor} defaultValue={data?.supervisor} inputProps={{placeholder: 'Supervisor'}}/>
          
          
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
export default ClassForm;
