import type { PropsWithChildren } from 'react';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';

type DrawerProps = PropsWithChildren<{
  title?: string;
  description?: string;
  open: boolean;
  onDrawerClose(): void;
  anchor?: 'left' | 'right';
  position?: 'fixed' | 'absolute';
}>;

export function Drawer(props: DrawerProps) {
  const { anchor = 'left', position = 'fixed' } = props;

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        unmount={false}
        onClose={props.onDrawerClose}
        className={clsx('fixed z-30 flex', {
          fixed: position === 'fixed',
          absolute: position === 'absolute',
          'inset-0': anchor === 'left',
          'inset-y-0 right-0': anchor === 'right',
        })}
      >
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
            enterFrom={clsx({
              '-translate-x-full': anchor === 'left',
              'translate-x-full': anchor === 'right',
            })}
            enterTo={clsx({
              'translate-x-0': anchor === 'left',
            })}
            leave="transition ease-in-out duration-300 transform"
            leaveFrom={clsx({
              'translate-x-0': anchor === 'left',
            })}
            leaveTo={clsx({
              '-translate-x-full': anchor === 'left',
              'translate-x-full': anchor === 'right',
            })}
          >
            <div className="flex flex-col z-50 overflow-hidden">
              {props.title && <Dialog.Title className="sr-only">{props.title}</Dialog.Title>}
              {props.description && <Dialog.Description className="sr-only">{props.description}</Dialog.Description>}
              {props.children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
