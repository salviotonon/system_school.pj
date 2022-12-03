import { Form } from '../../components/Form'
import { Input } from '../../components/Inputs'

export const Perfil = () => {
  return (
    <section className='w-3/4 ml-5 min-h-screen sm:max-w-full mx-auto bg-slate-200 rounded-xl'>
      <h1 className='mx-10 my-5 text-3xl'>Dados Pessoais</h1>
      <div className='bg-white p-10 m-10 w-1/2 rounded-xl'>
        <form>

          <Input
            placeholder='Nome do aluno'
            label='Nome do aluno'
          />
          <Input
            placeholder='Número do telefone'
            label='Número do telefone'
            type='number'
          />
          <Input
            placeholder='email'
            label='E-mail'
            type='email'
          />
          <Input
            placeholder='nome dos pais'
            label='Nome do Pai'
          />
          <button className='px-4 py-2 bg-blue-500 text-white rounded hover:opacity-90 duration-300'>Adicionar Aluno</button>
        </form>
      </div>

    </section>
  )
}
