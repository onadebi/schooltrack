import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormInputField from '../FormInputField';
import { IPropsTableForm } from '../../app/models/generics/IPropsTableForm';
import { RegInput, schema } from './schema';


const AttendanceForm: React.FC<IPropsTableForm<RegInput>> = ({type, data}) => {
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
        <h1 className='xt-xl font-semibold'>{type === 'create' ? `Register new`: 'Update'} teacher</h1>
        <span className='text-xs font-semibold'>Authentication Information</span>
        <div className="flex flex-wrap gap-8">
          <FormInputField label='Username' type='text' register={register} name='username' error={errors.username} defaultValue={data?.username} inputProps={{placeholder: 'Username'}}/>
          <FormInputField label='Email' type='email' register={register} name='email' error={errors.email} defaultValue={data?.email} inputProps={{placeholder: 'email'}}/>
          <FormInputField label='Password' type='password' register={register} name='password' error={errors.password} defaultValue={data?.password} inputProps={{placeholder: 'password'}}/>
        </div>
       
        {/* PERSONAL INFORMATION */}
        <span className='text-xs font-semibold'>Personal Information</span>
        <div className="flex flex-wrap gap-8">
          <FormInputField label='First Name' type='text' register={register} name='firstName' error={errors.firstName} defaultValue={data?.firstName} inputProps={{placeholder: 'First Name'}}/>
          <FormInputField label='Last Name' type='text' register={register} name='lastName' error={errors.lastName} defaultValue={data?.lastName} inputProps={{placeholder: 'Last Name'}}/>
          <FormInputField label='Phone' type='phone' register={register} name='phone' error={errors.phone} defaultValue={data?.phone} inputProps={{placeholder: 'Phone'}}/>
          
          <FormInputField label='Address' type='text' register={register} name='address' error={errors.address} defaultValue={data?.address} inputProps={{placeholder: 'address'}}/>
          <FormInputField label='Blood Type' type='text' register={register} name='bloodType' error={errors.bloodType} defaultValue={data?.bloodType} inputProps={{placeholder: 'Blood Type'}}/>
          <FormInputField label='Birthday' type='date' register={register} name='birthday' error={errors.birthday} defaultValue={data?.birthday ? data.birthday.toISOString().split('T')[0] : undefined} inputProps={{placeholder: 'Birthday'}}/>
          <div className='flex flex-col gap-2 md:w-1/4'>
              <label htmlFor={data?.sex} className='text-xs text-gray-500'>Gender</label>
              <select {...register("sex")} defaultValue={data?.sex} className='ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full'>
                <option value="--">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors?.sex?.message && <p className='text-xs text-red-400 w-full'>{errors?.sex?.message}</p>}
          </div>
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
export default AttendanceForm;
