import { Class } from '../../components/Class'
import { arrayClass } from '../../components/Class/arrayClass'

export const SectionHome = () => {
  const classRom = arrayClass.map((classRom) => (
    <Class
      key={Math.random()}
      sala={classRom.sala}
      local={classRom.local}
      regente={classRom.regente}
      formação={classRom.formação}
      urlImg={classRom.imgUrl}
    />
  ))
  return (
    <section className='w-3/4 ml-5 grid grid-cols-1 min-h-screen sm:max-w-full mx-auto items-center justify-center justify-items-center bg-slate-200 rounded-xl pt-10 h-[100vh] flex-nowrap overflow-auto
    hover:overflow-y-scroll'>
      <h1 className='text-3xl mb-10 text-slate-700'>Salas de Aula</h1>
      {classRom}
    </section>
  )
}
