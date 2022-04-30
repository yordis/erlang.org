import { ErlangOfficialLogo } from '@/components/erlang-official-logo';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { RouterLink } from '@/components/router-link';
import { useState } from 'react';
import { Drawer } from '@/components/drawer';

const navigation = [
  { name: 'Documentation', href: '/documentation' },
  { name: 'Community', href: '/community' },
  { name: 'Packages', href: '/packages' },
  { name: 'Blog', href: '/blog' },
];

function useHeader() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function onDrawerClose() {
    return setSidebarOpen(false);
  }

  function onOpenDrawer() {
    return setSidebarOpen(true);
  }

  return {
    sidebarOpen,
    setSidebarOpen,
    onDrawerClose,
    onOpenDrawer,
  };
}

function ErlangLogoHomeLink() {
  return (
    <RouterLink href="/">
      <span className="sr-only">Erlang</span>
      <ErlangOfficialLogo className="h-8 w-auto sm:h-10" />
    </RouterLink>
  );
}

function Menu(props: { onOpenDrawer: () => void }) {
  return (
    <div className="bg-gray-900 py-6">
      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <ErlangLogoHomeLink />
            <div className="-mr-2 flex items-center md:hidden">
              <button
                onClick={props.onOpenDrawer}
                className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="hidden space-x-8 md:flex md:ml-10">
            {navigation.map((item) => (
              <RouterLink
                key={item.name}
                href={item.href}
                className="text-base font-medium text-white hover:text-gray-300"
              >
                {item.name}
              </RouterLink>
            ))}
          </div>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-6">
          <RouterLink
            href="/get-started"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
          >
            Get Started
          </RouterLink>
        </div>
      </nav>
    </div>
  );
}

export function Header() {
  const controller = useHeader();
  return (
    <div className="relative overflow-hidden">
      <Menu onOpenDrawer={controller.onOpenDrawer} />

      <Drawer anchor="right" open={controller.sidebarOpen} onDrawerClose={controller.onDrawerClose} title="Main Menu">
        <div className="flex-1 flex-shrink-0 w-96 flex flex-col bg-white px-4 py-6">
          <div className="flex justify-between items-center">
            <ErlangLogoHomeLink />
            <button className="hover:bg-blue-100 p-2 rounded-full" onClick={controller.onDrawerClose}>
              <XIcon className="w-8 h-8 flex" />
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
