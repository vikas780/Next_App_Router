import Image from 'next/image'
import {
  RegisterLink,
  LoginLink,
} from '@kinde-oss/kinde-auth-nextjs/components'
export default function Home() {
  return (
    <div class='flex h-screen justify-center items-center dark:bg-gray-800 gap-10'>
      <div class='text-center max-w-6xl mx-10'>
        <p class='my-3 text-sm tracking-widest text-indigo-500 uppercase'>
          Fast &amp; SEO friendly
        </p>
        <h1 class='my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-gray-100'>
          Important <span className='t text-indigo-500'> Next.js</span> Concepts
        </h1>
        <div>
          <p class='max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl dark:text-gray-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            numquam veniam vitae excepturi voluptates, ratione commodi dolorem
            quae, magni nihil in corporis labore cum aut facilis fugit iste
            reprehenderit debitis.
          </p>
        </div>
        <div class='flex flex-col items-center justify-center gap-5 mt-6 md:flex-row'>
          <LoginLink className='inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 hover:bg-gradient-to-b dark:shadow-blue-900 shadow-blue-200 hover:shadow-2xl hover:shadow-blue-400 hover:-tranneutral-y-px '>
            Login
          </LoginLink>
          <RegisterLink className='inline-block w-auto text-center min-w-[200px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-neutral-300 dark:shadow-neutral-700 hover:shadow-2xl hover:shadow-neutral-400 hover:-tranneutral-y-px'>
            Register
          </RegisterLink>
        </div>
      </div>
      <div>
        <Image
          className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src='/dashboard.svg'
          alt='Next.js Logo'
          width={480}
          height={237}
          priority
        />
      </div>
    </div>
  )
}
