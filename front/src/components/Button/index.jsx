export const Button = ({ children, ...props }) => {
  return (
    <button className='bg-violet-900 px-4 py-2 rounded-lg text-white hover:bg-violet-500  focus:outline-none active:border-violet-700 shadow-md shadow-violet-600 transition-opacity w-full
    sm:w-48 mx-4 '>
      {children}
    </button>
  )
}
