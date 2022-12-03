export const ListStudent = ({ name, email, nota1, nota2 }) => {
  const media = (nota1 + nota2) / 2
  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="p-4 w-4">
        <div class="flex items-center">
          <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
          <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
        </div>
      </td>
      <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
        <img class="w-10 h-10 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Jese image" />
        <div class="pl-3">
          <div class="text-base font-semibold">{name}</div>
          <div class="font-normal text-gray-500">{email}</div>
        </div>
      </th>
      <td class="py-4 px-6">
        {nota1}
      </td>
      <td class="py-4 px-6">
        <div class="flex items-center">
          {nota2}
        </div>
      </td>
      <td class="py-4 px-6 flex  items-center">
        {media >= 7 ?
          (<div class="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>)
          :
          (<div class="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>)}
        {media}
      </td>
      <td class="py-4 px-6">
        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
      </td>
    </tr>
  )
}
