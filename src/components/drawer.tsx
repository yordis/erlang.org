import type { PropsWithChildren } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

type DrawerProps = PropsWithChildren<{
  title?: string;
  description?: string;
  open: boolean;
  onClose(): void;
}>

export function Drawer(props: DrawerProps) {
  return (
    <Transition show={props.open} as={Fragment}>
      <Dialog unmount={false} onClose={props.onClose} className="fixed z-30 inset-0 flex">
        <div className="flex flex-1">
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-in duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-30"
            entered="opacity-30"
            leave="transition-opacity ease-out duration-300"
            leaveFrom="opacity-30"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="z-40 fixed inset-0 bg-gradient-to-r from-gray-100 to-gray-100" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="flex flex-col z-50 overflow-hidden">
              {props.title && <Dialog.Title className="sr-only">{props.title}</Dialog.Title>}
              {props.description && <Dialog.Description className="sr-only">{props.description}</Dialog.Description>}
              {props.children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
