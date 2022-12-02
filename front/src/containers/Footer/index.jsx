import logo from '../../assets/logo.png'

export const Footer = () => {
  return (
    <footer className='bg-white shadow-xl h-24 flex flex-col items-center justify-center'>
      <span className='text-sm font-light'> Projeto Comunidade Pj &copy; </span>
      <img src={logo} alt="logo" className='w-14 h-14' />
    </footer>
  )
}
