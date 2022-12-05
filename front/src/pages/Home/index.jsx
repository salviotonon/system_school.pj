import { Aside } from '../../containers/Aside';

import { Outlet } from 'react-router-dom'

export const Home = () => {
  return (
    <>
      <main className='min-h-screen w-full mx-auto my flex p-5'>
        <Aside />
        <Outlet />
      </main>
    </>
  )
}
