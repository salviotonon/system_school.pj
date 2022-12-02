import { useState } from 'react';
import { FcMenu } from 'react-icons/fc';
import { GrFormClose } from 'react-icons/gr'
import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'



export const HomeLogout = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }


  return (
    <>
      <header className='p-5 sm:p-2 bg-white md:flex md:items-center md:justify-between sticky left-0 right-0 top-0 z-30'>
        <div className='mx-4 my-6 md:my-0 flex justify-between items-center'>
          <span className='text-2xl cursor-pointer'>
            <img src={logo} alt="logo" className='w-14 h-14' />
          </span>
          <span className='cursor-pointer md:hidden block' onClick={handleOpenMenu}>
            {openMenu === false ? <FcMenu size={28} /> :
              <GrFormClose size={32} />}
          </span>
        </div>

        <ul className={`md:flex md:items-center z-[8000] bg-white md:z-auto md:static absolute w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${openMenu === false ? 'top-[-400px] opacity-0' : 'top-[80px] opacity-100'} transition-all ease-in duration-500`}>
          <li className='text-black mx-4 my-6 md:my-0'><a href='#' className='text-x1 hover:text-cyan-500 duration-500'>HOME</a></li>
          <li className='text-black mx-4 my-6 md:my-0'><a href='#' className='text-x1 hover:text-cyan-500 duration-500'>ABOUT</a></li>
          <li className='text-black mx-4 my-6 md:my-0'><a href='#' className='text-x1 hover:text-cyan-500 duration-500'>CONTACT</a></li>
          <li className='text-black mx-4 my-6 md:my-0'><a href='#' className='text-x1 hover:text-cyan-500 duration-500'>CLASS</a></li>
          <button className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-75 text-white duration-500 px-6 py-2 hover:bg-cyan-500 rounded'>Registre-se</button>
        </ul>

      </header>
      <main className='min-h-screen w-full mx-auto my flex flex-col'>
        <section className='flex flex-row border-t border-gray-200'>
          <div className={`hidden opacity-70 min-h-screen bg-hero-page w-2/5 sm:flex justify-end items-center bg-cover h-full bg-center`}>

          </div>
          <div className='w-full min-h-screen max-w-sm mx-auto flex flex-col justify-center items-center'>
            <h1 className='text-slate-300 mb-10 text-3xl w-full text-center'>Faça login para acessar nossa plataforma!</h1>
            <Link to={'/login'} className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-75 text-white duration-500 px-32 py-4 border-2 border-slate-100 hover:bg-cyan-500 rounded hover:border-8'>Entrar</Link>
          </div>
        </section>
      </main>
      <footer className='bg-white shadow-xl h-24 flex flex-col items-center justify-center'>
        <span className='text-sm font-light'> Projeto Comunidade Pj &copy; </span>
        <img src={logo} alt="logo" className='w-14 h-14' />

      </footer>
    </>
  )
}
