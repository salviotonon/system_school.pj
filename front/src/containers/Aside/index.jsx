import { FiUser, FiLayout, FiFileText, FiWatch } from 'react-icons/fi'
import { MdPhotoCamera } from 'react-icons/md'
import { FiLogOut } from 'react-icons/fi'
import { TbLayoutDashboard } from 'react-icons/tb'

import { Link, NavLink } from 'react-router-dom'



export const Aside = () => {
  const activeLink = 'text-blue-500'
  const normalLink = 'text-slate-700'

  return (
    <div className='w-1/4 h-full min-h-screen p-2 rounded-xl bg-slate-200 flex flex-col'>
      <ul className='rounded-xl mt-5 text-lg'>
        <NavLink to='/home' className={({ isActive }) => (isActive ? activeLink : normalLink)} end >
          <li className='gap-1 justify-start mt-4 flex items-center px-4 py-2  hover:bg-blue-500 rounded hover:text-white font-normal duration-700 '>
            <TbLayoutDashboard size={22} />
            Dashboard
          </li>
        </NavLink>
        <NavLink to='perfil' className={({ isActive }) => (isActive ? activeLink : normalLink)} >
          <li className='gap-1 justify-start mt-4 flex items-center px-4 py-2  hover:bg-blue-500 rounded hover:text-white font-normal duration-700 '>
            <FiUser size={22} />
            Perfil
          </li>
        </NavLink>
        <NavLink to='disciplinas' className={({ isActive }) => (isActive ? activeLink : normalLink)} >
          <li className='gap-1 justify-start mt-4 flex items-center px-4 py-2  hover:bg-blue-500 rounded hover:text-white font-normal duration-700'>
            <FiLayout size={22} />
            Disciplinas
          </li>
        </NavLink>
        <NavLink to='mensagens' className={({ isActive }) => (isActive ? activeLink : normalLink)} >
          <li className='gap-1 justify-start mt-4 flex items-center px-4 py-2  hover:bg-blue-500 rounded hover:text-white font-normal duration-700'>
            <FiFileText size={22} />
            Mensagens
          </li>
        </NavLink>
        <NavLink to='horarios' className={({ isActive }) => (isActive ? activeLink : normalLink)} >
          <li className='gap-1 justify-start mt-4 flex items-center px-4 py-2  hover:bg-blue-500 rounded hover:text-white font-normal duration-700 '>
            <FiWatch size={22} />
            Horários
          </li>
        </NavLink>
        <NavLink to='fotos' className={({ isActive }) => (isActive ? activeLink : normalLink)} >
          <li className='gap-1 justify-start mt-4 flex items-center px-4 py-2  hover:bg-blue-500 rounded hover:text-white font-normal duration-700 '>
            <MdPhotoCamera size={22} />
            Fotos
          </li>
        </NavLink>
        <div className='h-[1px] border-b border-slate-300 mt-10 mb-4 w-4/5 mx-auto'></div>
        <NavLink to={'/'} className={`${({ isActive }) => isActive ? activeLink : normalLink} hover:opacity-90 duration-300 flex items-center justify-center gap-1 mx-8 px-4 py-2 bg-blue-500 text-slate-100 rounded-lg mt-5`} >
          <FiLogOut />
          Desconectar
        </NavLink>
      </ul>

    </div>
  )
}
