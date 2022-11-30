export const Button = ({ children, type, ...props }) => {
  return (
    <button
      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-75 text-white font-bold py-2 px-4 mt-4 rounded
    focus:outline-none focus:shadow-outline w-full duration-500"
      type={type}
    >

      {children}

    </button>
  )
}
