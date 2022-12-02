import { Class } from '../../components/Class';

export const Home = () => {
  return (
    <>
      <main className='min-h-screen w-full mx-auto my flex flex-col'>
        <section className='flex flex-row border-t border-gray-200'>
          <div className={`hidden opacity-70 min-h-screen bg-hero-page w-2/5 sm:flex justify-end items-center bg-cover h-full bg-center`}>

          </div>
          <div className='p-10 grid grid-cols-2 w-full min-h-screen max-w-sm sm:max-w-full mx-auto items-center justify-center justify-items-center'>
            <Class />
            <Class />
            <Class />
          </div>
        </section>
      </main>
    </>
  )
}
