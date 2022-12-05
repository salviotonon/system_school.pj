export const ListStudent = ({ name, id, email, nota1, nota2 }) => {
  const media = (nota1 + nota2) / 2
  return (
    <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="p-4 w-4">
        <div className="flex items-center">
          <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
        </div>
      </td>
      <th scope="row" className="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
        <img className="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Jese image" />
        <div className="pl-3">
          <div className="text-base font-semibold">{name}</div>
          <div className="font-normal text-gray-500">{email}</div>
        </div>
      </th>
      <td className="py-4 px-6">
        {nota1}
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center">
          {nota2}
        </div>
      </td>
      <td className="py-4 px-6 flex  items-center">
        {media >= 7 ?
          (<div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>)
          :
          (<div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>)}
        {media}
      </td>
      <td className="py-4 px-6">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"></a>
      </td>
    </tr>
  )
}
