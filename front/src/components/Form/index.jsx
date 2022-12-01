import { useFormik } from 'formik'
import React, { useState } from 'react'
import { registerSchema } from '../../schema/register'

import { Button } from '../Button'
import { Input } from '../Inputs'

export const Form = () => {
  const [showError, setShowError] = useState(false);

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: '',
      // email: '',
      password: '',
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  });
  const onSubmit = (e) => {
    setShowError(true);
    handleSubmit(e)
    cleanForm;
  }

  const cleanForm = () => {
    values.name = ''
    values.password = ''
  };

  return (
    <form onSubmit={onSubmit} className='bg-white shadow-md shadow-gray-400 rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm mx-2'>
      <h2 className='text-3xl text-gray-700 font-bold my-5'>
        Faça o login para continuar
      </h2>
      <Input
        name='name'
        values={values.name}
        label='Login'
        placeholder='Digite seu login'
        onChange={handleChange}
        error={showError ? errors.name : ''}
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
