import { Link } from 'react-router-dom'

export const HomeLogout = () => {
  return (
    <>
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
    </>
  )
}
