import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { signOut } from 'next-auth/react'

import type { User } from 'types/user'

import { ArrowIcon } from './ArrowIcon'

export const UserMenu: React.FC<User> = ({ user }) => {
  const { name, image } = user

  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='flex px-4 py-2 rounded-md hover:bg-slate-50 items-center gap-x-2'>
          <img src={image} alt={name} className='rounded-full w-6 h-6' />
          <p>{name}</p>
          <ArrowIcon />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-1 py-1'>
          <Menu.Item>
            <button
              onClick={() => signOut()}
              className={
                'group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-slate-50'
              }
            >
              Cerrar sesión
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
