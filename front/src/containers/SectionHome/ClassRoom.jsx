import { SearchInput } from '../../components/Inputs/SearchInput'
import { ListStudent } from '../../components/ListStudent'
import { students } from '../../components/Class/arrayClass'
import { useState } from 'react'


export const ClassRoom = () => {
  const [listStudent, setListStudent] = useState('')

  const filterStudent = students.filter((studentName) => (
    studentName.name.toLowerCase().normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, '').includes(listStudent)
  ))

  return (
    <section className='w-3/4 ml-5 grid grid-cols-1 min-h-screen h-screen sm:max-w-full mx-auto items-center justify-center justify-items-center bg-slate-200 rounded-xl'>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg w-full h-full p-2 rounded">
        <div className="flex justify-between items-center pb-4 bg-white dark:bg-gray-900 rounded p-2">
          <div>
            <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Action button</span>
              Aprovados
              <svg className="ml-2 w-3 h-3" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {/* Dropdown menu */}
            <div id="dropdownAction" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reprovados</a>
                </li>
                <li>
                  <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Todos</a>
                </li>
              </ul>
              <div className="py-1">
                <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
              </div>
            </div>
          </div>
          <SearchInput
            placeholder='Pesquise por aluno'
            listStudent={listStudent}
            setListStudent={setListStudent}
          />

        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 flex-nowrap overflow-scroll">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Nota 1
              </th>
              <th scope="col" className="py-3 px-6">
                Nota 2
              </th>
              <th scope="col" className="py-3 px-6">
                Média
              </th>
              <th scope="col" className="py-3 px-6">
                Editar
              </th>
            </tr>
          </thead>
          <tbody>
            {filterStudent.map(({ id, name, email, nota1, nota2 }) => (
              <ListStudent
                key={id}
                name={name}
                email={email}
                nota1={nota1}
                nota2={nota2}
              />
            ))}
          </tbody>
        </table>
      </div>

    </section>
  )
}
