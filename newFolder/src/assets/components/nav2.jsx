import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    

<nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between p-4 mx-auto">
        <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
        </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden md:flex md:w-full md:justify-center">
          <ul className="font-medium flex flex-col md:flex-row md:space-x-4 mt-4 md:mt-0">
            <li>
              <a href="#" className="block py-2 px-3 text-white rounded bg-gray-900 green md:p-0" aria-current="page">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded bg-gray-900 md:border-0 md:p-0 text-white hover:text-cyan-300 dark:hover:text-aqua">
                SPONSORS
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-cyan-300 md:p-0 text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                OUR TEAM
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white dark:hover:bg-gray-700 hover:text-cyan-300">
                CONTACT
              </a>
            </li>
          </ul>
        </div>
  </div>
</nav>

  );
}

export default BasicExample;