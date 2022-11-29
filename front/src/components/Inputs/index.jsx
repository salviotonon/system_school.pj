export const Input = ({ type, label, value, placeholder, name, error = '', onChange }) => {
  return (
    <div className='flex flex-col py-4'>
      <label className='block text-gray-700 text-sm font-bold mb-4 relative' htmlFor={name}>
        {label ? label : ''}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mt-2 text-gray-700 leading-tight focus:outline-none focus:border-cyan-300 focus:duration-700 focus:shadow-outline "
          type={type ? type : 'text'}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        />
        {error ? <span className='text-red-600 visible text-sm font-light text-end duration-500 absolute right-0 bottom-[-30px]'>{error}</span> : <span className='text-blue-600 invisible opacity-0'>{error}</span>}
      </label>

    </div>
  )
}
