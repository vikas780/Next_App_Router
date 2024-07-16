import Link from 'next/link'

function layout({ children }) {
  return (
    <div>
      <nav className='bg-black  text-white py-4 px-5 flex justify-between items-center '>
        <h3 className='text-xl'>Logo </h3>
        <ul className='flex items-center gap-8'>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className='flex'>
        <div className='h-screen bg-black w-[15vw] text-white'>
          <ul className='pt-5 flex flex-col gap-5 px-3'>
            <li>
              <Link href={'/dashboard'}>Dashboard</Link>
            </li>
            <li>
              <Link href={'/dashboard/todos'}>Todos</Link>
            </li>
            <li>
              <Link href={'/dashboard/user'}>User</Link>
            </li>
            <li>
              <Link href={'/dashboard/profile'}>Profile</Link>
            </li>
          </ul>
        </div>
        <div className='p-4 max-h-screen overflow-auto'>{children}</div>
      </div>
    </div>
  )
}

export default layout
