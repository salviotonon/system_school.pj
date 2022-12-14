import { useFormik } from 'formik'
import React, { useState } from 'react'
import { registerSchema } from '../../schema/register'
import {useDispatch, useSelector} from 'react-redux'
import { Button } from '../Button'
import { Input } from '../Inputs'
import {login,reset} from '../../slices/authSlice';

export const Form = () => {
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();
  const {loading, error} = useSelector((state) => state.auth)
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      // email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
     // console.log(values);
    }
  });
  const onSubmit = (e) => {
    setShowError(true);
    handleSubmit(e)
    e.preventDefault()
    const user = {
      email: values.email,
      password: values.password,
    }
    dispatch(login(user))
    cleanForm;
  }

  const cleanForm = () => {
    values.email = ''
    values.password = ''
  };

  return (
    <form onSubmit={onSubmit} className='bg-white shadow-md shadow-gray-400 rounded px-8 pt-6 pb-8 mb-4 max-w-md'>
      <h2 className='text-lg font-bold my-5'>
        Faça o login para continuar
      </h2>
      <Input
        name='email'
        values={values.email}
        label='Login'
        placeholder='Digite seu login'
        onChange={handleChange}
        error={showError ? errors.email : ''}
      />
      <Input
        name='password'
        values={values.password}
        label='Password'
        type='password'
        placeholder='**************'
        onChange={handleChange}
        error={showError ? errors.password : ''}
      />
      <Button type='submit'>Login</Button>
    </form>
  )
}
