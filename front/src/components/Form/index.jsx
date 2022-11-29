import { Button } from '../Button'
import { Input } from '../Inputs'

export const Form = () => {
  return (
    <form className='bg-white shadow-md shadow-gray-400 rounded px-8 pt-6 pb-8 mb-4'>
      <h2 className='text-lg font-bold my-5'>
        Faça o login para continuar
      </h2>
      <Input
        label='Login'
        placeholder='Digite seu login'
      />
      <Input
        label='Password'
        type='password'
        placeholder='**************'
      />
      <Button>Login</Button>
    </form>
  )
}
