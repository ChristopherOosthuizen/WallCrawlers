import { Fragment } from 'react'
import rock from './rock.PNG'
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    

<nav class=" bg-uh-red">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="./" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Rock Wanglers</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium bg-uh-red flex flex-col p-4 md:p-0  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-uh-red rounded md:bg-transparent md:p-0  md:dark:text-uh-white" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-uh-red rounded md:bg-transparent md:p-0  md:dark:text-uh-white">Contact Us</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-uh-red rounded md:bg-transparent md:p-0  md:dark:text-uh-white">Photos</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-uh-red rounded md:bg-transparent md:p-0  md:dark:text-uh-white">Events</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}