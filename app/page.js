import Image from 'next/image'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-evenly p-24'>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/dashboard.svg'
          alt='Next.js Logo'
          width={480}
          height={237}
          priority
        />
      </div>

      <div className='border-2 bg-black text-white p-2  rounded-xl  '>
        <a
          href='/dashboard'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors'
          rel='noopener noreferrer'
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Access Dashboard
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
        </a>
      </div>
    </main>
  )
}
