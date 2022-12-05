import { Form } from '../../components/Form'
import { FcMenu } from 'react-icons/fc'
import { GrFormClose } from 'react-icons/gr'
import { useState } from 'react'

import { Link } from 'react-router-dom'
import { Header } from '../../containers/Header'
import { Footer } from '../../containers/Footer'




export const Login = () => {
  return (
    <>
      <main className='min-h-screen w-full mx-auto my-5 flex justify-center items-center '>
        <Form />
      </main>
    </>
  )
}
