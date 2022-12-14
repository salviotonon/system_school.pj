<<<<<<< HEAD
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
=======

import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { showGang } from '../../slices/studentSlice';

export const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(showGang())
    },[])
    const {gang} = useSelector((state) => state.gang)
    console.log(gang)
    return (
      <div>
        <h1>Home</h1>
        {gang &&
          gang.map((gang) => (
            <>
              <h1>{gang.gang}</h1>
              <h3>{gang.Student.length}</h3>
            </>
          ))
        }
      </div>

    )
>>>>>>> f4b985122f87d99ef7f5fdb3023461d42088c8cc
}
