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
<<<<<<< HEAD
      <main className='min-h-screen w-full mx-auto my-5 flex justify-center items-center '>
        <Form />
=======
      <header className='p-5 bg-white shadow-xl md:flex md:items-center md:justify-between'>
        <div className='mx-4 my-6 md:my-0 flex justify-between items-center'>
          <span className='text-2xl cursor-pointer'>
            Logo
          </span>
          <span className='cursor-pointer md:hidden block' onClick={handleOpenMenu}>
            {openMenu === false ? <FcMenu size={28} /> :
              <GrFormClose size={32} />}
          </span>
        </div>

        <ul className={`md:flex md:items-center z-[10] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${openMenu === false ? 'top-[-400px] opacity-0' : 'top-[80px] opacity-100'} transition-all ease-in duration-500`}>
          <li className='text-black mx-4 my-6 md:my-0'><a href='#' className='text-x1 hover:text-cyan-500 duration-500'>HOME</a></li>
          <li className='text-black mx-4 my-6 md:my-0'><a href='#' className='text-x1 hover:text-cyan-500 duration-500'>ABOUT</a></li>
          <li className='text-black mx-4 my-6 md:my-0'><a href='#' className='text-x1 hover:text-cyan-500 duration-500'>CONTACT</a></li>
          <li className='text-black mx-4 my-6 md:my-0'><a href='#' className='text-x1 hover:text-cyan-500 duration-500'>CLASS</a></li>
          <button className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-75 text-white duration-500 px-6 py-2 hover:bg-cyan-500 rounded'>Get started</button>
        </ul>

      </header>
      <main className='min-h-screen w-full mx-auto my-0 flex justify-center items-center'>
        <Form  />

>>>>>>> f4b985122f87d99ef7f5fdb3023461d42088c8cc
      </main>
    </>
  )
}
