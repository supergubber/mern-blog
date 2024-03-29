import { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaMoon } from 'react-icons/fa'
const Header = () => {
  const path = useLocation().pathname
  console.log(path)
  return (
    <div>
      <Navbar className='border-b-2'>
        <Link
          to={'/'}
          className='self-center text-sm font-semibold whitespace-normal sm:text-xl dark:text-white'
        >
          <span className='px-2 py-1 text-white rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            Rizwan's
          </span>
          Blog
        </Link>
        <form>
          <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
          />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray' pill>
          <AiOutlineSearch />
        </Button>
        <div className='flex gap-2 md:order-2'>
          <Button className='hidden w-12 -10 sm:inline' color='gray' pill>
            <FaMoon />
          </Button>
          <Link to={'/sign-in'}>
            <Button gradientDuoTone={'purpleToBlue'} outline>
              Sing In
            </Button>
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to={'/'}>Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to={'/about'}>About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/project'} as={'div'}>
            <Link to={'/project'}>Projects </Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
