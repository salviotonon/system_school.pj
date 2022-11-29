export const Input = ({ type, label, value, placeholder, name, error = '', onChange }) => {
  return (
    <div className='flex flex-col py-4'>
      <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor={name}>
        {label ? label : ''}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type={type ? type : 'text'}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          value={value}
        />

      </label>
      {error ? <span className='text-red-600 visible'>{error}</span> : <span className='text-blue-600 invisible opacity-0'>{error}</span>}
    </div>
  )
}
