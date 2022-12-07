import { useFormik } from 'formik'
import React, { useState } from 'react'
import { loginSchema } from '../../schema/register'
import { Link } from 'react-router-dom'

import { Button } from '../Button'
import { Input } from '../Inputs'

export const Form = () => {
  const [showError, setShowError] = useState(false);

  const { values, errors, handleChange, handleSubmit, isSubmitting } = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false)
      }, 400)
    }
  });



  const onSubmit = (e) => {
    setShowError(true);
    handleSubmit(e)
  }

  return (
    <form autoComplete='off' onSubmit={onSubmit} className={`bg-white shadow-2xl shadow-blue-400 rounded-lg pb-8 mb-4 w-full max-w-sm mx-2`}>
      <div className='relative h-48 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-bl-4xl rounded-lg'>
        <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      <div className='px-6 pb-5'>

        <h2 className='text-3xl text-gray-800 font-bold mt-5 text-center'>
          Faça login para continuar
        </h2>
        <h3 className='text-gray-400 text-xs text-center mb-10 pb-5 mt-2'>Ainda não é membro? <span className='underline text-gray-700 hover:text-blue-500 duration-300'><Link to={'/signup'}>Registre-se</Link></span></h3>
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
          label='Senha'
          type='password'
          placeholder='**************'
          onChange={handleChange}
          error={showError ? errors.password : ''}
        />
        {isSubmitting ? (<Button type='submit'>...</Button>) : <Button type='submit'>Entrar</Button>}
      </div>
    </form>
  )
}
