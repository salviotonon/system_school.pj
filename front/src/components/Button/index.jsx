export const Button = ({ children, ...props }) => {
  return (
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded
    focus:outline-none focus:shadow-outline w-full"
      type="button">

      {children}

    </button>
  )
}
