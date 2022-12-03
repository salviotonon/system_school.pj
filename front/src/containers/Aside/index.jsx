import { FiUser, FiLayout, FiFileText, FiWatch } from 'react-icons/fi'
import { MdPhotoCamera } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { TbLayoutDashboard } from 'react-icons/tb'

import { Link } from 'react-router-dom'

export const Aside = () => {
  return (
    <div className='w-1/4 h-full min-h-screen p-2 rounded-xl bg-slate-200 flex flex-col'>
      <ul className='rounded-xl mt-5 text-lg'>
        <Link to={'/home'} className='gap-1 justify-start mt-4 flex items-center px-4 py-2  hover:bg-blue-500 hover:text-white font-normal text-slate-700 rounded-md hover:cursor-pointer duration-300'>
          <TbLayoutDashboard size={22} />
          Dashboard
        </Link>
        <Link to={'perfil'} className='gap-1 justify-start mt-4 flex items-center px-4 py-2  hover:bg-blue-500 hover:text-white font-normal text-slate-700 rounded-md hover:cursor-pointer duration-300'>
          <FiUser size={22} />
          Perfil
        </Link>
        <Link to={'disciplinas'} className='gap-1 justify-start mt-4 flex items-center px-4 py-2  hover:bg-blue-500 hover:text-white font-normal text-slate-700 rounded-md hover:cursor-pointer duration-300'>
          <FiLayout size={22} />
          Disciplinas
        </Link>
        <Link to={'mensagens'} className='gap-1 justify-start mt-4 flex items-center px-4 py-2  hover:bg-blue-500 hover:text-white font-normal text-slate-700 rounded-md hover:cursor-pointer duration-300'>
          <FiFileText size={22} />
          Mensagens
        </Link>
        <Link to={'horarios'} className='gap-1 justify-start mt-4 flex items-center px-4 py-2  hover:bg-blue-500 hover:text-white font-normal text-slate-700 rounded-md hover:cursor-pointer duration-300'>
          <FiWatch size={22} />
          Horários
        </Link>
        <Link to={'fotos'} className='gap-1 justify-start mt-4 flex items-center px-4 py-2  hover:bg-blue-500 hover:text-white font-normal text-slate-700 rounded-md hover:cursor-pointer duration-300'>
          <MdPhotoCamera size={22} />
          Fotos
        </Link>
      </ul>
      <div className='h-[1px] border-b border-slate-300 mt-10 mb-4 w-4/5 mx-auto'></div>
      <Link to={'/'} className='hover:opacity-90 duration-300 flex items-center justify-center gap-1 mx-8 px-4 py-2 bg-blue-500 text-slate-100 rounded-lg mt-5'>
        <FiLogOut />
        Logout </Link>

    </div>
  )
}
