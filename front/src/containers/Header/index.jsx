import { useState } from 'react';

import logo from '../../assets/logo.png'

import { Link } from 'react-router-dom'

import { GrFormClose } from 'react-icons/gr'
import { FcMenu } from 'react-icons/fc'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <header className='p-2 sm:p-2 bg-white shadow-xl md:flex md:items-center md:justify-between sticky left-0 right-0 top-0 z-30'>
      <div className='mx-4 my-6 md:my-0 flex justify-between items-center'>
        <span className='text-2xl cursor-pointer'>
          <img src={logo} alt="logo" className='w-14 h-14' />
        </span>
        <span className={`cursor-pointer md:hidden block`} onClick={handleOpenMenu}>
          {openMenu === false ?
            <FcMenu size={28} />
            :
            <GrFormClose size={32} />}
        </span>
      </div>

      <ul className={`md:flex md:items-center z-[8000] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${openMenu === false ? 'top-[-400px] opacity-0' : 'top-[80px] opacity-100'} transition-all ease-in duration-500`}>
        <li className='text-slate-700 mx-4 my-6 md:my-0'><Link to={'/'} className='text-x1 hover:text-blue-500 duration-500'>HOME</Link></li>
        <li className='text-slate-700 mx-4 my-6 md:my-0'><Link href='#' className='text-x1 hover:text-blue-500 duration-500'>ABOUT</Link></li>
        <li className='text-slate-700 mx-4 my-6 md:my-0'><Link href='#' className='text-x1 hover:text-blue-500 duration-500'>CONTACT</Link></li>
        <li className='text-slate-700 mx-4 my-6 md:my-0'><Link href='#' className='text-x1 hover:text-blue-500 duration-500'>CLASS</Link></li>
        <Link to={'/signup'} className='bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-75 text-white duration-500 px-6 py-2 hover:bg-cyan-500 rounded'>Registre-se</Link>
      </ul>
    </header>
  )
}
