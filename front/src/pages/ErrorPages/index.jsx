import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-6xl text-slate-200'>Oops!</h1>
      <p className='text-white sm:text-3xl text-sm'>Desculpe, um erro inesperado aconteceu!</p>
    </div>
  );
}
