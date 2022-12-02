export const Class = () => {
  return (
    <div class="max-w-xs cursor-pointer border-4 border-transparent hover:border-4 hover:border-cyan-500 transition-all duration-700  relative p-4 gap-2 mb-8 shadow-cyan-400 shadow-md rounded bg-white">
      <div class="max-w-2xl mx-auto mb-4 text-gray-500  dark:text-gray-400">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">3º Ano Matutino</h3>
        <p class="font-light text-sm">Andar 2 Bloco A Sala 341</p>
      </div>
      <div className='flex justify-center absolute top-[-10px] right-[-10px]'>
        <img class="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
      </div>
      <div class="space-y-0.5 font-medium flex flex-col justify-center items-center dark:text-white text-left">
        <div className='flex flex-col my-2'>Joseph McFall
          <span className='text-xs font-light leading-3'>Regente da turma</span>
        </div>

        <div class="text-sm font-light text-gray-500 dark:text-gray-400">Mestrado em Educação pela Universidade Federal do Ceará</div>
      </div>
    </div>
  )
}
