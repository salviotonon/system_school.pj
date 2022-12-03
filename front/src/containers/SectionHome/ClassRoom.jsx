import { SearchInput } from '../../components/Inputs/SearchInput'
import { ListStudent } from '../../components/ListStudent'
import { students } from '../../components/Class/arrayClass'

export const ClassRoom = () => {
  const dinamycListStudents = students.map((onlyStudent) => (
    <ListStudent
      key={Math.random()}
      name={onlyStudent.name}
      email={onlyStudent.email}
      nota1={onlyStudent.nota1}
      nota2={onlyStudent.nota2}

    />
  ))
  return (
    <section className='w-3/4 ml-5 grid grid-cols-1 min-h-screen h-screen sm:max-w-full mx-auto items-center justify-center justify-items-center bg-slate-200 rounded-xl'>
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg w-full h-full p-2 rounded">
        <div class="flex justify-between items-center pb-4 bg-white dark:bg-gray-900 rounded p-2">
          <div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span class="sr-only">Action button</span>
              Aprovados
              <svg class="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {/* Dropdown menu */}
            <div id="dropdownAction" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reprovados</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Todos</a>
                </li>
              </ul>
              <div class="py-1">
                <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
              </div>
            </div>
          </div>
          <SearchInput
            placeholder='Pesquise por aluno'
          />

        </div>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 flex-nowrap overflow-scroll">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" class="py-3 px-6">
                Name
              </th>
              <th scope="col" class="py-3 px-6">
                Nota 1
              </th>
              <th scope="col" class="py-3 px-6">
                Nota 2
              </th>
              <th scope="col" class="py-3 px-6">
                Média
              </th>
              <th scope="col" class="py-3 px-6">
                Editar
              </th>
            </tr>
          </thead>
          <tbody>
            {dinamycListStudents}
          </tbody>
        </table>
      </div>

    </section>
  )
}
