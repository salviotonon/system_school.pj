import { Link } from 'react-router-dom'

export const Class = ({ sala, local, regente, formação, urlImg }) => {
  return (
    <Link to='classroom'>
      <div className="max-w-xs cursor-pointer border-2 border-transparent hover:border-2 hover:border-blue-500 transition-all duration-700  relative p-4 gap-2 mb-8 shadow-gray-400 shadow-md rounded bg-white">
        <div className="max-w-2xl mx-auto mb-4 text-gray-500  dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{sala}</h3>
          <p className="font-light text-sm">{local}</p>
        </div>
        <div className='flex justify-center absolute top-[-10px] right-[-10px]'>
          <img className="rounded-full w-9 h-9" src={urlImg} alt="profile picture" />
        </div>
        <div className="space-y-0.5 font-medium flex flex-col justify-center items-center dark:text-white text-left">
          <div className='flex flex-col my-2'>{regente}
            <span className='text-xs font-light leading-3'>Regente da turma</span>
          </div>
          <div className="text-sm font-light text-gray-500 dark:text-gray-400">{formação}</div>
        </div>
      </div>
    </Link>
  )
}
