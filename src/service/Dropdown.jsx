
import { Menu, Transition } from '@headlessui/react'
import {Link} from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className="flex items-center  w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-normal text-[#666666] shadow-sm ">
          Sıralam seçin
          <i
                className="fa-solid fa-chevron-down mx-1 text-[0.55rem]"
              
              ></i>
        </Menu.Button>
      </div>

      <Transition
  
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                 to='/'
                  className={classNames(
                    active ? 'text-red' : 'black',
                    'block px-4 py-2 text-sm font-normal'
                  )}
                >
                Önerilen sıralama
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                 to='/'
                  className={classNames(
                    active ? 'text-red' : 'black',
                    'block px-4 py-2 text-sm font-normal'
                  )}
                >
                En düşük fiyat
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                 to='/'
                  className={classNames(
                    active ? 'text-red' : 'black',
                    'block px-4 py-2 text-sm font-normal'
                  )}
                >
               En yüksek fiyat
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                 to='/'
                  className={classNames(
                    active ? 'text-red' : 'black',
                    'block px-4 py-2 text-sm font-normal'
                  )}
                >
                En yeniler
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                 to='/'
                  className={classNames(
                    active ? 'text-red' : 'black',
                    'block px-4 py-2 text-sm font-normal'
                  )}
                >
            En çok satanlar
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                 to='/'
                  className={classNames(
                    active ? 'text-red' : 'black',
                    'block px-4 py-2 text-sm font-normal'
                  )}
                >
               En çok beğenilenler
                </Link>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                 to='/'
                  className={classNames(
                    active ? 'text-red' : 'black',
                    'block px-4 py-2 text-sm font-normal'
                  )}
                >
              En çok değerlendirilenler
                </Link>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}