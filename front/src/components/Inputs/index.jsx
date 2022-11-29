export const Input = ({ type, label, placeholder }) => {
  return (
    <div className='flex flex-col py-4'>
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        {label}
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type ? type : 'text'}
        placeholder={placeholder} />
    </div>
  )
}
