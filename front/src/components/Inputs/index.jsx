export const Input = ({ type, label, value, placeholder, name, error = '', onChange }) => {
  return (
    <div className='flex flex-col py-4 relative my-4 '>

      <input
        className="z-20 bg-transparent peer border-b-2 border-gray-300 w-full text-gray-900 leading-tight focus:outline-none focus:border-b-2 focus:border-blue-300 placeholder-transparent"
        type={type ? type : 'text'}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
      />
      <label className='text-base peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 absolute left-0 -top-3.5 text-gray-700 transition-all' htmlFor={name}>
        {label ? label : ''}
      </label>
      <div className='relative'>
        {error ? <span className='text-red-600 visible text-sm font-light text-end duration-500 absolute right-0 bottom-[-30px]'>{error}</span> : <span className='text-blue-600 invisible opacity-0'>{error}</span>}
      </div>
    </div>
  )
}
